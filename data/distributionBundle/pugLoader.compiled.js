#!/usr/bin/env node
'use strict';var _clientnode=require('clientnode'),_clientnode2=_interopRequireDefault(_clientnode),_fs=require('fs'),fileSystem=_interopRequireWildcard(_fs),_loaderUtils=require('loader-utils'),loaderUtils=_interopRequireWildcard(_loaderUtils),_pug=require('pug'),pug=_interopRequireWildcard(_pug),_configurator=require('./configurator.compiled'),_configurator2=_interopRequireDefault(_configurator),_helper=require('./helper.compiled'),_helper2=_interopRequireDefault(_helper);function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}try{require('source-map-support/register')}catch(a){}module.exports=function(a){this.cacheable&&this.cacheable();const b=_clientnode2.default.convertSubstringInPlainObject(_clientnode2.default.extendObject(!0,{context:'./',extensions:{file:{external:['.js'],internal:['.js','.css','.svg','.png','.jpg','.gif','.ico','.html','.json','.eot','.ttf','.woff']},module:[]},module:{aliases:{},replacements:{}}},this.options.pug||{}),/#%%%#/g,'!'),c=(d,e=b.compiler)=>(f={})=>{e=_clientnode2.default.extendObject(!0,{filename:d,doctype:'html',compileDebug:this.debug||!1},e);let g;return e.isString?(delete e.isString,g=pug.compile(d,e)):g=pug.compileFile(d,e),g(_clientnode2.default.extendObject(!0,{configuration:_configurator2.default,require:(h)=>{const i=h.replace(/^(.+)\?[^?]+$/,'$1'),j=h.match(/^[^?]+\?(.+)$/,'$1');let k={};if(j){k=((o,p,q,r,s)=>new Function('request','template','source','compile','locals',`return ${j[1]}`)(o,p,q,r,s))(h,i,a,c,f)}const l=_clientnode2.default.extendObject(!0,{encoding:'utf-8'},k.options||{});if(l.isString)return c(i,l)(k);const m=_helper2.default.determineModuleFilePath(i,b.module.aliases,b.module.replacements,b.extensions,b.context,_configurator2.default.path.source.asset.base,_configurator2.default.path.ignore,_configurator2.default.module.directoryNames,_configurator2.default.package.main.fileNames,_configurator2.default.package.main.propertyNames,_configurator2.default.package.aliasPropertyNames);if(m)return this.addDependency(m),j||m.endsWith('.pug')?c(m,l)(k):fileSystem.readFileSync(m,l);throw new Error(`Given template file "${i}" couldn't be resolved.`)}},f))};return c(a,_clientnode2.default.extendObject(!0,{isString:!0,filename:loaderUtils.getRemainingRequest(this).replace(/^!/,'')},b.compiler||{}))(b.locals||{})};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RnRCLENBR2UsRUFBUSxDQUFSLENBQTBCLENBQTFCLEVBQW1DLENBQW5DLENBSGYsQ0FJVyxXQUFXLFlBQVgsQ0FBd0IsQ0FBeEIsQ0FBMEMsQ0FBMUMsQ0FKWCxDQU1BLEtBQU0sSUFBSSxNQUFKLENBQ0Qsd0JBQXVCLENBQVMseUJBRC9CLENBRVQsQ0ExQzRDLENBQXpCLENBMENoQixDQTFDZ0IsQ0FBakIsQ0EyQ1YsQ0F6RUQsQ0EwRUEsTUFBTyxHQUFRLENBQVIsQ0FBZ0IscUJBQU0sWUFBTixJQUF5QixDQUM1QyxXQUQ0QyxDQUU1QyxTQUFVLFlBQVksbUJBQVosQ0FBZ0MsSUFBaEMsRUFBc0MsT0FBdEMsQ0FBOEMsSUFBOUMsQ0FBb0QsRUFBcEQsQ0FGa0MsQ0FBekIsQ0FHcEIsRUFBTSxRQUFOLElBSG9CLENBQWhCLEVBR21CLEVBQU0sTUFBTixJQUhuQixDQUlWLEMiLCJmaWxlIjoicHVnTG9hZGVyLmNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBAZmxvd1xuLy8gLSotIGNvZGluZzogdXRmLTggLSotXG4ndXNlIHN0cmljdCdcbi8qICFcbiAgICByZWdpb24gaGVhZGVyXG4gICAgQ29weXJpZ2h0IFRvcmJlbiBTaWNrZXJ0IChpbmZvW1wifmF0flwiXXRvcmJlbi53ZWJzaXRlKSAxNi4xMi4yMDEyXG5cbiAgICBMaWNlbnNlXG4gICAgLS0tLS0tLVxuXG4gICAgVGhpcyBsaWJyYXJ5IHdyaXR0ZW4gYnkgVG9yYmVuIFNpY2tlcnQgc3RhbmQgdW5kZXIgYSBjcmVhdGl2ZSBjb21tb25zIG5hbWluZ1xuICAgIDMuMCB1bnBvcnRlZCBsaWNlbnNlLiBzZWUgaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL2RlZWQuZGVcbiAgICBlbmRyZWdpb25cbiovXG4vLyByZWdpb24gaW1wb3J0c1xuaW1wb3J0IFRvb2xzIGZyb20gJ2NsaWVudG5vZGUnXG5pbXBvcnQgKiBhcyBmaWxlU3lzdGVtIGZyb20gJ2ZzJ1xuaW1wb3J0ICogYXMgbG9hZGVyVXRpbHMgZnJvbSAnbG9hZGVyLXV0aWxzJ1xuaW1wb3J0ICogYXMgcHVnIGZyb20gJ3B1Zydcbi8vIE5PVEU6IE9ubHkgbmVlZGVkIGZvciBkZWJ1Z2dpbmcgdGhpcyBmaWxlLlxudHJ5IHtcbiAgICByZXF1aXJlKCdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInKVxufSBjYXRjaCAoZXJyb3IpIHt9XG5cbmltcG9ydCBjb25maWd1cmF0aW9uIGZyb20gJy4vY29uZmlndXJhdG9yLmNvbXBpbGVkJ1xuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlci5jb21waWxlZCdcbi8vIGVuZHJlZ2lvblxuLy8gcmVnaW9uIHR5cGVzXG50eXBlIFRlbXBsYXRlRnVuY3Rpb24gPSAobG9jYWxzOk9iamVjdCkgPT4gc3RyaW5nXG50eXBlIENvbXBpbGVGdW5jdGlvbiA9ICh0ZW1wbGF0ZTpzdHJpbmcsIG9wdGlvbnM6T2JqZWN0KSA9PiBUZW1wbGF0ZUZ1bmN0aW9uXG4vLyBlbmRyZWdpb25cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc291cmNlOnN0cmluZyk6c3RyaW5nIHtcbiAgICBpZiAodGhpcy5jYWNoZWFibGUpXG4gICAgICAgIHRoaXMuY2FjaGVhYmxlKClcbiAgICBjb25zdCBxdWVyeTpPYmplY3QgPSBUb29scy5jb252ZXJ0U3Vic3RyaW5nSW5QbGFpbk9iamVjdChcbiAgICAgICAgVG9vbHMuZXh0ZW5kT2JqZWN0KHRydWUsIHtcbiAgICAgICAgICAgIGNvbnRleHQ6ICcuLycsXG4gICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgZmlsZToge1xuICAgICAgICAgICAgICAgICAgICBleHRlcm5hbDogWycuanMnXSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWw6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICcuanMnLCAnLmNzcycsICcuc3ZnJywgJy5wbmcnLCAnLmpwZycsICcuZ2lmJywgJy5pY28nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJy5odG1sJywgJy5qc29uJywgJy5lb3QnLCAnLnR0ZicsICcud29mZidcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sIG1vZHVsZTogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2R1bGU6IHtcbiAgICAgICAgICAgICAgICBhbGlhc2VzOiB7fSxcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudHM6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5wdWcgfHwge30pLCAvIyUlJSMvZywgJyEnKVxuICAgIGNvbnN0IGNvbXBpbGU6Q29tcGlsZUZ1bmN0aW9uID0gKFxuICAgICAgICB0ZW1wbGF0ZTpzdHJpbmcsIG9wdGlvbnM6T2JqZWN0ID0gcXVlcnkuY29tcGlsZXJcbiAgICApOlRlbXBsYXRlRnVuY3Rpb24gPT4gKGxvY2FsczpPYmplY3QgPSB7fSk6c3RyaW5nID0+IHtcbiAgICAgICAgb3B0aW9ucyA9IFRvb2xzLmV4dGVuZE9iamVjdCh0cnVlLCB7XG4gICAgICAgICAgICBmaWxlbmFtZTogdGVtcGxhdGUsIGRvY3R5cGU6ICdodG1sJyxcbiAgICAgICAgICAgIGNvbXBpbGVEZWJ1ZzogdGhpcy5kZWJ1ZyB8fCBmYWxzZVxuICAgICAgICB9LCBvcHRpb25zKVxuICAgICAgICBsZXQgdGVtcGxhdGVGdW5jdGlvbjpUZW1wbGF0ZUZ1bmN0aW9uXG4gICAgICAgIGlmIChvcHRpb25zLmlzU3RyaW5nKSB7XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5pc1N0cmluZ1xuICAgICAgICAgICAgdGVtcGxhdGVGdW5jdGlvbiA9IHB1Zy5jb21waWxlKHRlbXBsYXRlLCBvcHRpb25zKVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHRlbXBsYXRlRnVuY3Rpb24gPSBwdWcuY29tcGlsZUZpbGUodGVtcGxhdGUsIG9wdGlvbnMpXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZUZ1bmN0aW9uKFRvb2xzLmV4dGVuZE9iamVjdCh0cnVlLCB7XG4gICAgICAgICAgICBjb25maWd1cmF0aW9uLCByZXF1aXJlOiAocmVxdWVzdDpzdHJpbmcpOnN0cmluZyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcGxhdGU6c3RyaW5nID0gcmVxdWVzdC5yZXBsYWNlKC9eKC4rKVxcP1teP10rJC8sICckMScpXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlNYXRjaDo/QXJyYXk8c3RyaW5nPiA9IHJlcXVlc3QubWF0Y2goXG4gICAgICAgICAgICAgICAgICAgIC9eW14/XStcXD8oLispJC8sICckMScpXG4gICAgICAgICAgICAgICAgbGV0IG5lc3RlZExvY2FsczpPYmplY3QgPSB7fVxuICAgICAgICAgICAgICAgIGlmIChxdWVyeU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2YWx1YXRpb25GdW5jdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6c3RyaW5nLCB0ZW1wbGF0ZTpzdHJpbmcsIHNvdXJjZTpzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21waWxlOkNvbXBpbGVGdW5jdGlvbiwgbG9jYWxzOk9iamVjdFxuICAgICAgICAgICAgICAgICAgICApOk9iamVjdCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlVHlwZUNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JlcXVlc3QnLCAndGVtcGxhdGUnLCAnc291cmNlJywgJ2NvbXBpbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsb2NhbHMnLCBgcmV0dXJuICR7cXVlcnlNYXRjaFsxXX1gXG4gICAgICAgICAgICAgICAgICAgICAgICApKHJlcXVlc3QsIHRlbXBsYXRlLCBzb3VyY2UsIGNvbXBpbGUsIGxvY2FscylcbiAgICAgICAgICAgICAgICAgICAgbmVzdGVkTG9jYWxzID0gZXZhbHVhdGlvbkZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCwgdGVtcGxhdGUsIHNvdXJjZSwgY29tcGlsZSwgbG9jYWxzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zOk9iamVjdCA9IFRvb2xzLmV4dGVuZE9iamVjdCh0cnVlLCB7XG4gICAgICAgICAgICAgICAgICAgIGVuY29kaW5nOiAndXRmLTgnXG4gICAgICAgICAgICAgICAgfSwgbmVzdGVkTG9jYWxzLm9wdGlvbnMgfHwge30pXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuaXNTdHJpbmcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21waWxlKHRlbXBsYXRlLCBvcHRpb25zKShuZXN0ZWRMb2NhbHMpXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVGaWxlUGF0aDo/c3RyaW5nID1cbiAgICAgICAgICAgICAgICAgICAgSGVscGVyLmRldGVybWluZU1vZHVsZUZpbGVQYXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUsIHF1ZXJ5Lm1vZHVsZS5hbGlhc2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkubW9kdWxlLnJlcGxhY2VtZW50cywgcXVlcnkuZXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LmNvbnRleHQsIGNvbmZpZ3VyYXRpb24ucGF0aC5zb3VyY2UuYXNzZXQuYmFzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24ucGF0aC5pZ25vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLm1vZHVsZS5kaXJlY3RvcnlOYW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24ucGFja2FnZS5tYWluLmZpbGVOYW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24ucGFja2FnZS5tYWluLnByb3BlcnR5TmFtZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLnBhY2thZ2UuYWxpYXNQcm9wZXJ0eU5hbWVzKVxuICAgICAgICAgICAgICAgIGlmICh0ZW1wbGF0ZUZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRGVwZW5kZW5jeSh0ZW1wbGF0ZUZpbGVQYXRoKVxuICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlNYXRjaCB8fCB0ZW1wbGF0ZUZpbGVQYXRoLmVuZHNXaXRoKCcucHVnJykpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGlsZSh0ZW1wbGF0ZUZpbGVQYXRoLCBvcHRpb25zKShuZXN0ZWRMb2NhbHMpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlU3lzdGVtLnJlYWRGaWxlU3luYyh0ZW1wbGF0ZUZpbGVQYXRoLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBHaXZlbiB0ZW1wbGF0ZSBmaWxlIFwiJHt0ZW1wbGF0ZX1cIiBjb3VsZG4ndCBiZSByZXNvbHZlZC5gKVxuICAgICAgICAgICAgfX0sIGxvY2FscykpXG4gICAgfVxuICAgIHJldHVybiBjb21waWxlKHNvdXJjZSwgVG9vbHMuZXh0ZW5kT2JqZWN0KHRydWUsIHtcbiAgICAgICAgaXNTdHJpbmc6IHRydWUsXG4gICAgICAgIGZpbGVuYW1lOiBsb2FkZXJVdGlscy5nZXRSZW1haW5pbmdSZXF1ZXN0KHRoaXMpLnJlcGxhY2UoL14hLywgJycpXG4gICAgfSwgcXVlcnkuY29tcGlsZXIgfHwge30pKShxdWVyeS5sb2NhbHMgfHwge30pXG59XG4vLyByZWdpb24gdmltIG1vZGxpbmVcbi8vIHZpbTogc2V0IHRhYnN0b3A9NCBzaGlmdHdpZHRoPTQgZXhwYW5kdGFiOlxuLy8gdmltOiBmb2xkbWV0aG9kPW1hcmtlciBmb2xkbWFya2VyPXJlZ2lvbixlbmRyZWdpb246XG4vLyBlbmRyZWdpb25cbiJdfQ==