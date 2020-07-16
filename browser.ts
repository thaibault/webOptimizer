// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module browser */
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import Tools, {ConsoleOutputMethods} from 'clientnode'
import {DOMWindow} from 'jsdom'
import {loader} from 'webpack'

import {Browser, InitializedBrowser} from './type'
// endregion
// region declaration
declare const NAME:string
declare const TARGET_TECHNOLOGY:string
// endregion
// region variables
const onCreatedListener:Array<Function> = []
export const browser:Browser = {
    debug: false,
    domContentLoaded: false,
    DOM: null,
    initialized: false,
    instance: null,
    window: null,
    windowLoaded: false
}
// endregion
// region ensure presence of common browser environment
if (typeof TARGET_TECHNOLOGY === 'undefined' || TARGET_TECHNOLOGY === 'node')
    // region mock browser environment
    /*
    NOTE: This syntax cannot be interpret by typescript currently.

    Promise.all([import('path'), import('jsdom')]).then((
        [path, {JSDOM, VirtualConsole}]
    ):void => {
    */
    import('path').then((path) => import('jsdom').then(({
        JSDOM, VirtualConsole
    }) => {
        const virtualConsole = new VirtualConsole()
        for (const name of ConsoleOutputMethods)
            virtualConsole.on(name, console[name].bind(console))
        virtualConsole.on(
            'error',
            (error:Error & {detail:string;type:string}):void => {
                if (
                    !browser.debug &&
                    ['XMLHttpRequest', 'resource loading'].includes(error.type)
                )
                    console.warn(
                        `Loading resource failed: ${error.toString()}.`
                    )
                else
                    console.error(error.stack, error.detail)
            }
        )
        const render = (template:string):void => {
            browser.DOM = JSDOM
            browser.initialized = true
            browser.instance = new browser.DOM(
                template,
                {
                    beforeParse: (window:DOMWindow):void => {
                        // We want to use it in a polymorphic way.
                        browser.window = window as unknown as Window
                        window.document.addEventListener(
                            'DOMContentLoaded',
                            ():void => {
                                browser.domContentLoaded = true
                            }
                        )
                        window.addEventListener('load', ():void => {
                            /*
                                NOTE: Maybe we have miss the "DOMContentLoaded"
                                event caused by a race condition.
                            */
                            browser.domContentLoaded =
                                browser.windowLoaded =
                                true
                        })
                        for (const callback of onCreatedListener)
                            callback()
                    },
                    resources: 'usable',
                    runScripts: 'dangerously',
                    url: 'http://localhost',
                    virtualConsole
                }
            )
        }
        if (typeof NAME === 'undefined' || NAME === 'webOptimizer') {
            const filePath:string = path.join(__dirname, 'index.html.ejs')
            /*
                NOTE: We load dependencies now to avoid having file imports
                after test runner has finished to isolate the environment.
            */
            import('./ejsLoader').then(({default: ejsLoader}):void =>
                require('fs').readFile(
                    filePath,
                    {encoding: 'utf-8'},
                    (error:Error|null, content:string):void => {
                        if (error)
                            throw error
                        render(ejsLoader.bind(
                            {resourcePath: filePath} as loader.LoaderContext
                        )(content))
                    }
                )
            )
        } else
            import('webOptimizerDefaultTemplateFilePath').then(render)
    }))
    // endregion
else {
    browser.initialized = true
    browser.window = window
    window.document.addEventListener('DOMContentLoaded', ():void => {
        browser.domContentLoaded = true
    })
    window.addEventListener('load', ():void => {
        browser.windowLoaded = true
    })
    Tools.timeout(():void => {
        for (const callback of onCreatedListener)
            callback()
    })
}
// endregion
/**
 * Provides a generic browser api in node or web contexts.
 * @param replaceWindow - Indicates whether a potential existing window object
 * should be replaced or not.
 * @returns Determined environment.
 */
export const getInitializedBrowser = async (
    replaceWindow = true
):Promise<InitializedBrowser> => {
    let resolvePromise:Function
    const promise:Promise<InitializedBrowser> = new Promise(
        (resolve:Function):void => {
            resolvePromise = resolve
        }
    )
    /*
        NOTE: We have to define window globally before anything is loaded to
        ensure that all future instances share the same window object.
    */
    const wrappedCallback:Function = ():void => {
        if (
            replaceWindow &&
            typeof global !== 'undefined' &&
            (global as unknown as Window) !== browser.window
        )
            (global as unknown as {window:Window}).window =
                browser.window as Window
        resolvePromise(browser)
    }
    if (browser.initialized)
        wrappedCallback()
    else
        onCreatedListener.push(wrappedCallback)
    return promise
}
export default getInitializedBrowser
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
