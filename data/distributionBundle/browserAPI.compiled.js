'use strict';Object.defineProperty(exports,'__esModule',{value:!0});const onCreatedListener=[];let browserAPI;if('undefined'==typeof TARGET_TECHNOLOGY||'node'===TARGET_TECHNOLOGY){const a=require('path'),b=require('jsdom'),c=b.createVirtualConsole().sendTo(console,{omitJsdomErrors:!0});c.on('jsdomError',function(e){!browserAPI.debug&&['XMLHttpRequest','resource loading'].includes(e.type)?console.warn(`Loading resource failed: ${e.toString()}.`):console.error(e.stack,e.detail)});let d;d='undefined'==typeof NAME||'webOptimizer'===NAME?require('pug').compileFile(a.join(__dirname,'index.pug'),{pretty:!0})({configuration:{name:'test',givenCommandLineArguments:[]}}):require('webOptimizerDefaultTemplateFilePath'),b.env({created:function created(e,f){if(browserAPI={debug:!1,domContentLoaded:!1,metaDOM:b,window:f,windowLoaded:!1},browserAPI.window.document.addEventListener('DOMContentLoaded',function(){browserAPI.domContentLoaded=!0}),e)throw e;else for(const g of onCreatedListener)g(browserAPI,!1)},features:{FetchExternalResources:['script','frame','iframe','link','img'],ProcessExternalResources:['script'],SkipExternalResources:!1},html:d,onload:function onload(){browserAPI.domContentLoaded=!0,browserAPI.windowLoaded=!0},resourceLoader:function resourceLoader(e,f){return'localhost'===e.url.hostname&&(e.url.host=e.url.hostname='',e.url.port=null,e.url.protocol='file:',e.url.href=e.url.href.replace(/^[a-zA-Z]+:\/\/localhost(?::[0-9]+)?/,`file://${process.cwd()}`),e.url.path=e.url.pathname=a.join(process.cwd(),e.url.path)),browserAPI.debug&&console.info(`Load resource "${e.url.href}".`),e.defaultFetch(function(g,...h){g||f(g,...h)})},url:'http://localhost',virtualConsole:c})}else browserAPI={debug:!1,domContentLoaded:!1,metaDOM:null,window,windowLoaded:!1},window.document.addEventListener('DOMContentLoaded',function(){browserAPI.domContentLoaded=!0;for(const a of onCreatedListener)a(browserAPI,!1)}),window.addEventListener('load',function(){browserAPI.windowLoaded=!0});exports.default=function(a,b=!0){return b&&'undefined'!=typeof global&&global!==browserAPI.window&&(global.window=browserAPI.window),'undefined'==typeof TARGET_TECHNOLOGY||'node'===TARGET_TECHNOLOGY?browserAPI?a(browserAPI,!0):onCreatedListener.push(a):browserAPI.domContentLoaded?a(browserAPI,!0):onCreatedListener.push(a)};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb3dzZXJBUEkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsYSx1REF1QkEsS0FBTSxxQkFBTixDQUNBLEdBQUksV0FBSixDQUdBLEdBQWlDLFdBQTdCLFFBQU8sa0JBQVAsRUFBa0UsTUFBdEIsb0JBQWhELENBQThFLENBRTFFLEtBQU0sR0FBYyxRQUFRLE1BQVIsQ0FBcEIsQ0FDTSxFQUFpQixRQUFRLE9BQVIsQ0FEdkIsQ0FFTSxFQUF3QixFQUFRLG9CQUFSLEdBQStCLE1BQS9CLENBQzFCLE9BRDBCLENBQ2pCLENBQUMsa0JBQUQsQ0FEaUIsQ0FGOUIsQ0FJQSxFQUFlLEVBQWYsQ0FBa0IsWUFBbEIsQ0FBZ0MsV0FBc0IsQ0FDOUMsQ0FBQyxXQUFXLEtBQVosRUFBcUIsc0NBR3ZCLFFBSHVCLENBR2QsRUFBTSxJQUhRLENBRHlCLENBSzlDLFFBQVEsSUFBUixDQUFjLDRCQUEyQixFQUFNLFFBQU4sRUFBaUIsR0FBMUQsQ0FMOEMsQ0FROUMsUUFBUSxLQUFSLENBQWMsRUFBTSxLQUFwQixDQUEyQixFQUFNLE1BQWpDLENBQ1AsQ0FURCxDQU4wRSxDQWdCMUUsR0FBSSxFQUFKLENBaEIwRSxFQWlCdEQsV0FBaEIsUUFBTyxLQUFQLEVBQXdDLGNBQVQsT0FqQnVDLENBa0IzRCxRQUFRLEtBQVIsRUFBZSxXQUFmLENBQTJCLEVBQUssSUFBTCxDQUNsQyxTQURrQyxDQUN2QixXQUR1QixDQUEzQixDQUVSLENBQUMsU0FBRCxDQUZRLEVBRVEsQ0FBQyxjQUFlLENBQy9CLEtBQU0sTUFEeUIsQ0FDakIsNEJBRGlCLENBQWhCLENBRlIsQ0FsQjJELENBeUIzRCxRQUFRLHFDQUFSLENBekIyRCxDQTBCMUUsRUFBUSxHQUFSLENBQVksQ0FDUixRQUFTLHFCQUFzQyxDQVEzQyxHQVBBLFdBQWEsQ0FDVCxRQURTLENBQ0ssbUJBREwsQ0FDOEIsU0FEOUIsQ0FDdUMsUUFEdkMsQ0FFVCxlQUZTLENBT2IsQ0FKQSxXQUFXLE1BQVgsQ0FBa0IsUUFBbEIsQ0FBMkIsZ0JBQTNCLENBQTRDLGtCQUE1QyxDQUFnRSxVQUN0RCxDQUNOLFdBQVcsZ0JBQVgsR0FDSCxDQUhELENBSUEsQ0FBSSxDQUFKLENBQ0ksS0FBTSxFQUFOLENBREosSUFHSSxLQUFLLEtBQU0sRUFBWCxHQUFnQyxrQkFBaEMsQ0FDSSxFQUFTLFVBQVQsSUFDWCxDQWRPLENBZVIsU0FBVSxDQUNOLCtEQURNLENBSU4sbUNBSk0sQ0FLTix3QkFMTSxDQWZGLENBc0JSLEtBQU0sQ0F0QkUsQ0F1QlIsT0FBUSxpQkFBVyxDQUNmLFdBQVcsZ0JBQVgsR0FEZSxDQUVmLFdBQVcsWUFBWCxHQUNILENBMUJPLENBMkJSLGVBQWdCLDRCQWtCTixDQWFOLE1BWjhCLFdBQTFCLEtBQVMsR0FBVCxDQUFhLFFBWWpCLEdBWEksRUFBUyxHQUFULENBQWEsSUFBYixDQUFvQixFQUFTLEdBQVQsQ0FBYSxRQUFiLENBQXdCLEVBV2hELENBVkksRUFBUyxHQUFULENBQWEsSUFBYixDQUFvQixJQVV4QixDQVRJLEVBQVMsR0FBVCxDQUFhLFFBQWIsQ0FBd0IsT0FTNUIsQ0FSSSxFQUFTLEdBQVQsQ0FBYSxJQUFiLENBQW9CLEVBQVMsR0FBVCxDQUFhLElBQWIsQ0FBa0IsT0FBbEIsQ0FDaEIsc0NBRGdCLENBRWYsVUFBUyxRQUFRLEdBQVIsRUFBYyxFQUZSLENBUXhCLENBTEksRUFBUyxHQUFULENBQWEsSUFBYixDQUFvQixFQUFTLEdBQVQsQ0FBYSxRQUFiLENBQXdCLEVBQUssSUFBTCxDQUN4QyxRQUFRLEdBQVIsRUFEd0MsQ0FDekIsRUFBUyxHQUFULENBQWEsSUFEWSxDQUtoRCxFQUZJLFdBQVcsS0FFZixFQURJLFFBQVEsSUFBUixDQUFjLGtCQUFpQixFQUFTLEdBQVQsQ0FBYSxJQUFLLElBQWpELENBQ0osQ0FBTyxFQUFTLFlBQVQsQ0FBc0IsV0FDWCxJQURXLENBRW5CLENBQ0QsQ0FEQyxFQUVGLEVBQVMsQ0FBVCxDQUFnQixHQUFHLENBQW5CLENBQ1AsQ0FMTSxDQU1WLENBaEVPLENBaUVSLElBQUssa0JBakVHLENBa0VSLGdCQWxFUSxDQUFaLENBcUVILENBL0ZELElBZ0dJLFlBQWEsQ0FDVCxRQURTLENBQ0ssbUJBREwsQ0FDOEIsUUFBUyxJQUR2QyxDQUM2QyxNQUQ3QyxDQUVULGVBRlMsQ0FoR2pCLENBbUdJLE9BQU8sUUFBUCxDQUFnQixnQkFBaEIsQ0FBaUMsa0JBQWpDLENBQXFELFVBQVcsQ0FDNUQsV0FBVyxnQkFBWCxHQUQ0RCxDQUU1RCxJQUFLLEtBQU0sRUFBWCxHQUFnQyxrQkFBaEMsQ0FDSSxFQUFTLFVBQVQsSUFDUCxDQUpELENBbkdKLENBd0dJLE9BQU8sZ0JBQVAsQ0FBd0IsTUFBeEIsQ0FBZ0MsVUFBVyxDQUN2QyxXQUFXLFlBQVgsR0FDSCxDQUZELENBeEdKLEMsZ0JBNkdlLFdBQW9CLElBQXBCLENBQWlELE9BTXhELElBQTJCLFdBQWxCLFFBQU8sT0FBaEIsRUFBMEMsU0FBVyxXQUFXLE1BTlIsR0FPeEQsT0FBTyxNQUFQLENBQWdCLFdBQVcsTUFQNkIsRUFVM0IsV0FBN0IsUUFBTyxrQkFBUCxFQUNzQixNQUF0QixvQkFYd0QsQ0FhaEQsVUFBRCxDQUFlLEVBQ2xCLFVBRGtCLElBQWYsQ0FFSCxrQkFBa0IsSUFBbEIsQ0FBdUIsQ0FBdkIsQ0Fmb0QsQ0FnQnBELFdBQVcsZ0JBQVosQ0FBZ0MsRUFDbkMsVUFEbUMsSUFBaEMsQ0FFSCxrQkFBa0IsSUFBbEIsQ0FBdUIsQ0FBdkIsQ0FDUCxDIiwiZmlsZSI6ImJyb3dzZXJBUEkuY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAjIS91c3IvYmluL2VudiBub2RlXG4vLyBAZmxvd1xuLy8gLSotIGNvZGluZzogdXRmLTggLSotXG4ndXNlIHN0cmljdCdcbi8qICFcbiAgICByZWdpb24gaGVhZGVyXG4gICAgQ29weXJpZ2h0IFRvcmJlbiBTaWNrZXJ0IChpbmZvW1wifmF0flwiXXRvcmJlbi53ZWJzaXRlKSAxNi4xMi4yMDEyXG5cbiAgICBMaWNlbnNlXG4gICAgLS0tLS0tLVxuXG4gICAgVGhpcyBsaWJyYXJ5IHdyaXR0ZW4gYnkgVG9yYmVuIFNpY2tlcnQgc3RhbmQgdW5kZXIgYSBjcmVhdGl2ZSBjb21tb25zIG5hbWluZ1xuICAgIDMuMCB1bnBvcnRlZCBsaWNlbnNlLiBzZWUgaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL2RlZWQuZGVcbiAgICBlbmRyZWdpb25cbiovXG4vLyByZWdpb24gaW1wb3J0c1xuaW1wb3J0IHR5cGUge0RvbU5vZGUsIFdpbmRvd30gZnJvbSAnY2xpZW50bm9kZSdcbmltcG9ydCB0eXBlIHtCcm93c2VyQVBJfSBmcm9tICcuL3R5cGUnXG4vLyBlbmRyZWdpb25cbi8vIHJlZ2lvbiBkZWNsYXJhdGlvblxuLy8gTk9URTogUHJvZHVjZXMgYSBiYWJlbCBlcnJvciB5ZXQuXG4vLyBkZWNsYXJlIHZhciBOQU1FOnN0cmluZ1xuLy8gZGVjbGFyZSB2YXIgVEFSR0VUX1RFQ0hOT0xPR1k6c3RyaW5nXG5kZWNsYXJlIHZhciB3aW5kb3c6V2luZG93XG4vLyBlbmRyZWdpb25cbi8vIHJlZ2lvbiB2YXJpYWJsZXNcbmNvbnN0IG9uQ3JlYXRlZExpc3RlbmVyOkFycmF5PEZ1bmN0aW9uPiA9IFtdXG5sZXQgYnJvd3NlckFQSTpCcm93c2VyQVBJXG4vLyBlbmRyZWdpb25cbi8vIHJlZ2lvbiBlbnN1cmUgcHJlc2VuY2Ugb2YgY29tbW9uIGJyb3dzZXIgZW52aXJvbm1lbnRcbmlmICh0eXBlb2YgVEFSR0VUX1RFQ0hOT0xPR1kgPT09ICd1bmRlZmluZWQnIHx8IFRBUkdFVF9URUNITk9MT0dZID09PSAnbm9kZScpIHtcbiAgICAvLyByZWdpb24gbW9jayBicm93c2VyIGVudmlyb25tZW50XG4gICAgY29uc3QgcGF0aDpPYmplY3QgPSByZXF1aXJlKCdwYXRoJylcbiAgICBjb25zdCBtZXRhRE9NOk9iamVjdCA9IHJlcXVpcmUoJ2pzZG9tJylcbiAgICBjb25zdCB2aXJ0dWFsQ29uc29sZTpPYmplY3QgPSBtZXRhRE9NLmNyZWF0ZVZpcnR1YWxDb25zb2xlKCkuc2VuZFRvKFxuICAgICAgICBjb25zb2xlLCB7b21pdEpzZG9tRXJyb3JzOiB0cnVlfSlcbiAgICB2aXJ0dWFsQ29uc29sZS5vbignanNkb21FcnJvcicsIChlcnJvcjpFcnJvcik6dm9pZCA9PiB7XG4gICAgICAgIGlmICghYnJvd3NlckFQSS5kZWJ1ZyAmJiBbXG4gICAgICAgICAgICAnWE1MSHR0cFJlcXVlc3QnLCAncmVzb3VyY2UgbG9hZGluZydcbiAgICAgICAgLy8gSWdub3JlVHlwZUNoZWNrXG4gICAgICAgIF0uaW5jbHVkZXMoZXJyb3IudHlwZSkpXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYExvYWRpbmcgcmVzb3VyY2UgZmFpbGVkOiAke2Vycm9yLnRvU3RyaW5nKCl9LmApXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIC8vIElnbm9yZVR5cGVDaGVja1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5zdGFjaywgZXJyb3IuZGV0YWlsKVxuICAgIH0pXG4gICAgbGV0IHRlbXBsYXRlOnN0cmluZ1xuICAgIGlmICh0eXBlb2YgTkFNRSA9PT0gJ3VuZGVmaW5lZCcgfHwgTkFNRSA9PT0gJ3dlYk9wdGltaXplcicpXG4gICAgICAgIHRlbXBsYXRlID0gcmVxdWlyZSgncHVnJykuY29tcGlsZUZpbGUocGF0aC5qb2luKFxuICAgICAgICAgICAgX19kaXJuYW1lLCAnaW5kZXgucHVnJ1xuICAgICAgICApLCB7cHJldHR5OiB0cnVlfSkoe2NvbmZpZ3VyYXRpb246IHtcbiAgICAgICAgICAgIG5hbWU6ICd0ZXN0JywgZ2l2ZW5Db21tYW5kTGluZUFyZ3VtZW50czogW11cbiAgICAgICAgfX0pXG4gICAgZWxzZVxuICAgICAgICAvLyBJZ25vcmVUeXBlQ2hlY2tcbiAgICAgICAgdGVtcGxhdGUgPSByZXF1aXJlKCd3ZWJPcHRpbWl6ZXJEZWZhdWx0VGVtcGxhdGVGaWxlUGF0aCcpXG4gICAgbWV0YURPTS5lbnYoe1xuICAgICAgICBjcmVhdGVkOiAoZXJyb3I6P0Vycm9yLCB3aW5kb3c6V2luZG93KTp2b2lkID0+IHtcbiAgICAgICAgICAgIGJyb3dzZXJBUEkgPSB7XG4gICAgICAgICAgICAgICAgZGVidWc6IGZhbHNlLCBkb21Db250ZW50TG9hZGVkOiBmYWxzZSwgbWV0YURPTSwgd2luZG93LFxuICAgICAgICAgICAgICAgIHdpbmRvd0xvYWRlZDogZmFsc2V9XG4gICAgICAgICAgICBicm93c2VyQVBJLndpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKFxuICAgICAgICAgICAgKTp2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBicm93c2VyQVBJLmRvbUNvbnRlbnRMb2FkZWQgPSB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjazpGdW5jdGlvbiBvZiBvbkNyZWF0ZWRMaXN0ZW5lcilcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soYnJvd3NlckFQSSwgZmFsc2UpXG4gICAgICAgIH0sXG4gICAgICAgIGZlYXR1cmVzOiB7XG4gICAgICAgICAgICBGZXRjaEV4dGVybmFsUmVzb3VyY2VzOiBbXG4gICAgICAgICAgICAgICAgJ3NjcmlwdCcsICdmcmFtZScsICdpZnJhbWUnLCAnbGluaycsICdpbWcnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgUHJvY2Vzc0V4dGVybmFsUmVzb3VyY2VzOiBbJ3NjcmlwdCddLFxuICAgICAgICAgICAgU2tpcEV4dGVybmFsUmVzb3VyY2VzOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBodG1sOiB0ZW1wbGF0ZSxcbiAgICAgICAgb25sb2FkOiAoKTp2b2lkID0+IHtcbiAgICAgICAgICAgIGJyb3dzZXJBUEkuZG9tQ29udGVudExvYWRlZCA9IHRydWVcbiAgICAgICAgICAgIGJyb3dzZXJBUEkud2luZG93TG9hZGVkID0gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICByZXNvdXJjZUxvYWRlcjogKFxuICAgICAgICAgICAgcmVzb3VyY2U6e1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6RG9tTm9kZTtcbiAgICAgICAgICAgICAgICB1cmw6e1xuICAgICAgICAgICAgICAgICAgICBob3N0bmFtZTpzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGhvc3Q6c3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBwb3J0Oj9zdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHByb3RvY29sOnN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgaHJlZjpzdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHBhdGg6c3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTpzdHJpbmc7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb29raWU6c3RyaW5nO1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6c3RyaW5nO1xuICAgICAgICAgICAgICAgIGRlZmF1bHRGZXRjaDooY2FsbGJhY2s6KFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjo/RXJyb3IsIGJvZHk6c3RyaW5nXG4gICAgICAgICAgICAgICAgKSA9PiB2b2lkKSA9PiB2b2lkXG4gICAgICAgICAgICB9LCBjYWxsYmFjazooZXJyb3I6P0Vycm9yLCBjb250ZW50OmFueSkgPT4gdm9pZFxuICAgICAgICApOnZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc291cmNlLnVybC5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcpIHtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS51cmwuaG9zdCA9IHJlc291cmNlLnVybC5ob3N0bmFtZSA9ICcnXG4gICAgICAgICAgICAgICAgcmVzb3VyY2UudXJsLnBvcnQgPSBudWxsXG4gICAgICAgICAgICAgICAgcmVzb3VyY2UudXJsLnByb3RvY29sID0gJ2ZpbGU6J1xuICAgICAgICAgICAgICAgIHJlc291cmNlLnVybC5ocmVmID0gcmVzb3VyY2UudXJsLmhyZWYucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgL15bYS16QS1aXSs6XFwvXFwvbG9jYWxob3N0KD86OlswLTldKyk/LyxcbiAgICAgICAgICAgICAgICAgICAgYGZpbGU6Ly8ke3Byb2Nlc3MuY3dkKCl9YClcbiAgICAgICAgICAgICAgICByZXNvdXJjZS51cmwucGF0aCA9IHJlc291cmNlLnVybC5wYXRobmFtZSA9IHBhdGguam9pbihcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5jd2QoKSwgcmVzb3VyY2UudXJsLnBhdGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYnJvd3NlckFQSS5kZWJ1ZylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oYExvYWQgcmVzb3VyY2UgXCIke3Jlc291cmNlLnVybC5ocmVmfVwiLmApXG4gICAgICAgICAgICByZXR1cm4gcmVzb3VyY2UuZGVmYXVsdEZldGNoKChcbiAgICAgICAgICAgICAgICBlcnJvcjo/RXJyb3IsIC4uLmFkZGl0aW9uYWxQYXJhbWV0ZXI6QXJyYXk8YW55PlxuICAgICAgICAgICAgKTp2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yKVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgLi4uYWRkaXRpb25hbFBhcmFtZXRlcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3QnLFxuICAgICAgICB2aXJ0dWFsQ29uc29sZVxuICAgIH0pXG4gICAgLy8gZW5kcmVnaW9uXG59IGVsc2Uge1xuICAgIGJyb3dzZXJBUEkgPSB7XG4gICAgICAgIGRlYnVnOiBmYWxzZSwgZG9tQ29udGVudExvYWRlZDogZmFsc2UsIG1ldGFET006IG51bGwsIHdpbmRvdyxcbiAgICAgICAgd2luZG93TG9hZGVkOiBmYWxzZX1cbiAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpOnZvaWQgPT4ge1xuICAgICAgICBicm93c2VyQVBJLmRvbUNvbnRlbnRMb2FkZWQgPSB0cnVlXG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2s6RnVuY3Rpb24gb2Ygb25DcmVhdGVkTGlzdGVuZXIpXG4gICAgICAgICAgICBjYWxsYmFjayhicm93c2VyQVBJLCBmYWxzZSlcbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk6dm9pZCA9PiB7XG4gICAgICAgIGJyb3dzZXJBUEkud2luZG93TG9hZGVkID0gdHJ1ZVxuICAgIH0pXG59XG4vLyBlbmRyZWdpb25cbmV4cG9ydCBkZWZhdWx0IChjYWxsYmFjazpGdW5jdGlvbiwgY2xlYXI6Ym9vbGVhbiA9IHRydWUpOmFueSA9PiB7XG4gICAgLy8gcmVnaW9uIGluaXRpYWxpemUgZ2xvYmFsIGNvbnRleHRcbiAgICAvKlxuICAgICAgICBOT1RFOiBXZSBoYXZlIHRvIGRlZmluZSB3aW5kb3cgZ2xvYmFsbHkgYmVmb3JlIGFueXRoaW5nIGlzIGxvYWRlZCB0b1xuICAgICAgICBlbnN1cmUgdGhhdCBhbGwgZnV0dXJlIGluc3RhbmNlcyBzaGFyZSB0aGUgc2FtZSB3aW5kb3cgb2JqZWN0LlxuICAgICovXG4gICAgaWYgKGNsZWFyICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbCAhPT0gYnJvd3NlckFQSS53aW5kb3cpXG4gICAgICAgIGdsb2JhbC53aW5kb3cgPSBicm93c2VyQVBJLndpbmRvd1xuICAgIC8vIGVuZHJlZ2lvblxuICAgIGlmIChcbiAgICAgICAgdHlwZW9mIFRBUkdFVF9URUNITk9MT0dZID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICBUQVJHRVRfVEVDSE5PTE9HWSA9PT0gJ25vZGUnXG4gICAgKVxuICAgICAgICByZXR1cm4gKGJyb3dzZXJBUEkpID8gY2FsbGJhY2soXG4gICAgICAgICAgICBicm93c2VyQVBJLCB0cnVlXG4gICAgICAgICkgOiBvbkNyZWF0ZWRMaXN0ZW5lci5wdXNoKGNhbGxiYWNrKVxuICAgIHJldHVybiAoYnJvd3NlckFQSS5kb21Db250ZW50TG9hZGVkKSA/IGNhbGxiYWNrKFxuICAgICAgICBicm93c2VyQVBJLCB0cnVlXG4gICAgKSA6IG9uQ3JlYXRlZExpc3RlbmVyLnB1c2goY2FsbGJhY2spXG59XG4vLyByZWdpb24gdmltIG1vZGxpbmVcbi8vIHZpbTogc2V0IHRhYnN0b3A9NCBzaGlmdHdpZHRoPTQgZXhwYW5kdGFiOlxuLy8gdmltOiBmb2xkbWV0aG9kPW1hcmtlciBmb2xkbWFya2VyPXJlZ2lvbixlbmRyZWdpb246XG4vLyBlbmRyZWdpb25cbiJdfQ==