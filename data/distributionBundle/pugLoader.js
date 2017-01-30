#!/usr/bin/env node
// @flow
// -*- coding: utf-8 -*-
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons naming
    3.0 unported license. see http://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import Tools from 'clientnode'
import * as fileSystem from 'fs'
import * as loaderUtils from 'loader-utils'
import * as pug from 'pug'
// NOTE: Only needed for debugging this file.
try {
    require('source-map-support/register')
} catch (error) {}

import configuration from './configurator.compiled'
import Helper from './helper.compiled'
// endregion
// region types
type TemplateFunction = (locals:Object) => string
type CompileFunction = (template:string, options:Object) => TemplateFunction
// endregion
module.exports = function(source:string):string {
    if (this.cacheable)
        this.cacheable()
    const query:Object = Tools.convertSubstringInPlainObject(
        Tools.extendObject(true, {
            context: './',
            extensions: {
                file: {
                    external: ['.js'],
                    internal: [
                        '.js', '.css', '.svg', '.png', '.jpg', '.gif', '.ico',
                        '.html', '.json', '.eot', '.ttf', '.woff'
                    ]
                }, module: []
            },
            module: {
                aliases: {},
                replacements: {}
            }
        }, this.options.pug || {}, loaderUtils.parseQuery(this.query)),
        /#%%%#/g, '!')
    const compile:CompileFunction = (
        template:string, options:Object = query.compiler
    ):TemplateFunction => (locals:Object = {}):string => {
        options = Tools.extendObject(true, {
            filename: template, doctype: 'html',
            compileDebug: this.debug || false
        }, options)
        let templateFunction:TemplateFunction
        if (options.isString) {
            delete options.isString
            templateFunction = pug.compile(template, options)
        } else
            templateFunction = pug.compileFile(template, options)
        return templateFunction(Tools.extendObject(true, {
            configuration, require: (request:string):string => {
                const template:string = request.replace(/^(.+)\?[^?]+$/, '$1')
                const queryMatch:?Array<string> = request.match(
                    /^[^?]+\?(.+)$/, '$1')
                let nestedLocals:Object = {}
                if (queryMatch) {
                    const evaluationFunction = (
                        request:string, template:string, source:string,
                        compile:CompileFunction, locals:Object
                    ):Object =>
                        // IgnoreTypeCheck
                        new Function(
                            'request', 'template', 'source', 'compile',
                            'locals', `return ${queryMatch[1]}`
                        )(request, template, source, compile, locals)
                    nestedLocals = evaluationFunction(
                        request, template, source, compile, locals)
                }
                const options:Object = Tools.extendObject(true, {
                    encoding: 'utf-8'
                }, nestedLocals.options || {})
                if (options.isString)
                    return compile(template, options)(nestedLocals)
                const templateFilePath:?string =
                    Helper.determineModuleFilePath(
                        template, query.module.aliases,
                        query.module.replacements, query.extensions,
                        query.context, configuration.path.source.asset.base,
                        configuration.path.ignore,
                        configuration.module.directoryNames,
                        configuration.package.main.fileNames,
                        configuration.package.main.propertyNames,
                        configuration.package.aliasPropertyNames)
                if (templateFilePath) {
                    this.addDependency(templateFilePath)
                    if (queryMatch || templateFilePath.endsWith('.pug'))
                        return compile(templateFilePath, options)(nestedLocals)
                    return fileSystem.readFileSync(templateFilePath, options)
                }
                throw new Error(
                    `Given template file "${template}" couldn't be resolved.`)
            }}, locals))
    }
    return compile(source, Tools.extendObject(true, {
        isString: true,
        filename: loaderUtils.getRemainingRequest(this).replace(/^!/, '')
    }, query.compiler || {}))(query.locals || {})
}
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
