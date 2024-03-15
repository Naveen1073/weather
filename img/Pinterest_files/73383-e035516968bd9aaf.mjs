"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[73383],{288959:(e,t,a)=>{a.d(t,{W:()=>n,r:()=>l});var i=a(667294),r=a(583592),s=a(785893);let{Provider:o,useHook:l}=(0,r.Z)("VideoPlayer");function n({children:e}){let[t,a]=(0,i.useState)(!1),r=(0,i.useMemo)(()=>({captionsEnabled:t,setCaptionsEnabled:a}),[t]);return(0,s.jsx)(o,{value:r,children:e})}},991319:(e,t,a)=>{a.d(t,{P:()=>p,Z:()=>m});var i=a(667294),r=a(867631),s=a.n(r),o=a(883119),l=a(969327),n=a(536042),d=a(874261),h=a(282802),u=a(785893);function c(e,t,a){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let p=`
  video::cue {
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, 'ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', Arial, sans-serif;
    font-weight: 450;
    font-size: 18px;
  }
`;class y extends i.PureComponent{constructor(...e){super(...e),c(this,"state",{videoStartTime:0}),c(this,"setVideoPlayerRef",e=>{let{setVideoRef:t,handlePlay:a,autoplay:i=!0}=this.props;this.videoPlayerRef=e,e&&t&&t(e.video),this.videoPlayerRef&&this.videoPlayerRef.video&&a&&i&&this.videoPlayerRef.video.addEventListener("canplay",()=>{a({userTriggeredPlay:!1})})}),c(this,"hls",null),c(this,"initializeHls",()=>{this.destroyHls();let{src:e}=this.props,t=new(s());s().isSupported()&&!(0,l.G6)(this.props.requestContext.userAgent.browserName)&&(t.loadSource(e),this.videoPlayerRef&&t.attachMedia(this.videoPlayerRef.video)),this.hls=t}),c(this,"destroyHls",()=>{let{hls:e}=this;e&&e.destroy()}),c(this,"onPlay",({event:e})=>{let{handlePlay:t}=this.props;e.stopPropagation(),t&&t({userTriggeredPlay:!0})}),c(this,"onPause",({event:e})=>{let{handlePause:t}=this.props;e.stopPropagation(),t&&t()}),c(this,"handleVolumeChange",({event:e,volume:t})=>{let{onVolumeChange:a}=this.props;e.stopPropagation(),a&&a({volume:t})}),c(this,"handleOnReady",e=>{this.props.onReady&&this.props.onReady(e)}),c(this,"handleEnded",()=>{let{onEnded:e}=this.props;e&&e()}),c(this,"handlePlaying",()=>{let{clearSeekTime:e}=this.props;e&&e()})}componentDidMount(){var e,t;this.initializeHls();let a=null===(e=this.videoPlayerRef)||void 0===e?void 0:null===(t=e.video)||void 0===t?void 0:t.textTracks[0];a&&a.addEventListener("cuechange",()=>{let e=a.activeCues[0];e&&e.line&&(e.line=-6,e.size=88)})}componentWillUnmount(){this.destroyHls()}componentDidUpdate(e){var t,a;let{activeStreamItemIndex:i,playing:r,src:o,seekTime:l,captionsEnabled:n}=this.props;l&&l!==e.seekTime&&this.setState({videoStartTime:l});let d=null===(t=this.videoPlayerRef)||void 0===t?void 0:null===(a=t.video)||void 0===a?void 0:a.textTracks[0];d&&(n?d.mode="showing":d.mode="disabled"),i!==e.activeStreamItemIndex&&this.videoPlayerRef&&this.videoPlayerRef.video&&(this.videoPlayerRef.video.currentTime=0),e.src!==o&&(this.initializeHls(),this.hls&&this.hls.on(s().Events.MANIFEST_PARSED,()=>{void 0!==r&&r&&this.videoPlayerRef&&this.videoPlayerRef.play()}))}render(){let{aspectRatio:e,controls:t,loop:a=!1,poster:i,src:r,onTimeChange:s,playing:l,volume:n,captions:h}=this.props;return(0,u.jsxs)(o.xu,{children:[(0,u.jsx)(d.Z,{unsafeCSS:p}),(0,u.jsx)(o.nk,{autoplay:l,playsInline:!0,aspectRatio:e,captions:h,controls:t,loop:a,onControlsPause:this.onPause,onControlsPlay:this.onPlay,onReady:this.handleOnReady,onEnded:this.handleEnded,onVolumeChange:this.handleVolumeChange,onTimeChange:s,onPlay:()=>{},onPlaying:this.handlePlaying,onPlayError:()=>{},playing:l,poster:i,ref:this.setVideoPlayerRef,src:r,startTime:this.state.videoStartTime||void 0,volume:n})]})}}function m(e){let{clearSeekTime:t,pinId:a="",seekTime:i}=e,r=(0,n.ZP)(),s=(0,h.B)();return(0,u.jsx)(y,{...e,i18n:r,requestContext:s,seekTime:i,clearSeekTime:()=>{t&&t(a)}})}},473383:(e,t,a)=>{a.r(t),a.d(t,{VideoWrapper:()=>R,default:()=>E,getPlaylistSourceSrc:()=>D});var i=a(667294),r=a(883119),s=a(969327),o=a(282802),l=a(634004),n=a(931696),d=a(288959),h=a(886365),u=a(388011),c=a(874261),p=a(245410),y=a(802071),m=a(499992),v=a(505204),P=a(991319),S=a(785893);function f(e,t,a){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){if(!e||void 0===e)return"undefined";if("string"==typeof e){let a=e;return t&&(a=e.replace("v1.pinimg.com","control"===t?"v3.pinimg.com":"v2.pinimg.com")),a}if(Array.isArray(e)&&e[0].src){let a=e[0].src;return t&&(a=a.replace("v1.pinimg.com","control"===t?"v3.pinimg.com":"v2.pinimg.com")),a}return`unsupported_type_${typeof e}`}class g extends i.Component{constructor(...e){super(...e),f(this,"state",{canPlayVideo:!1,playbackState:v.Cy.DEFAULT,videoStartTime:this.props.seekTime?this.props.seekTime:this.props.videoStartTime||0}),f(this,"errorRetryCount",2),f(this,"hasSegmentStarted",!1),f(this,"hasPlaybackStarted",!1),f(this,"hasVideoSessionStarted",!1),f(this,"hasVideoSessionEnded",!1),f(this,"lastStallTime",null),f(this,"lastPauseTime",null),f(this,"logSessionStartOnNextPlay",!1),f(this,"playerId",""),f(this,"videoSessionId",""),f(this,"videoVisibleTime",null),f(this,"playbackPerformance",{canPlayTime:null,detailedErrors:"",errorCode:0,errorName:"",errorReason:"",hasFatalError:!1,loadStartTime:null,numberOfStalls:0,numberOfSeeks:0,playbackStartTimestamp:null,segments:[],srcString:b(this.props.src,this.props.quicExpGroup),totalStallDurationMs:0,totalPauseDurationMs:0}),f(this,"componentDidMount",()=>{var e,t;let{contextLogData:a={},playing:i}=this.props,{is_closeup_video:r=!1}=a;(0,m.tE)("videoMounted",!1,r),i&&(this.videoVisibleTime=new Date,this.logPlaybackPerformance(v.DR,{initiator:"mount"}));let s=null===(e=this.videoPlayerRef)||void 0===e?void 0:null===(t=e.video)||void 0===t?void 0:t.textTracks[0];s&&s.addEventListener("cuechange",()=>{let e=s.activeCues[0];e&&e.line&&(e.line=-6,e.size=88)})}),f(this,"componentDidUpdate",e=>{var t,a;let{playing:i,visible:r,appInFocus:s,seekTime:o,captionsEnabled:l}=this.props;o&&o!==e.seekTime&&this.setState({videoStartTime:o});let n=null===(t=this.videoPlayerRef)||void 0===t?void 0:null===(a=t.video)||void 0===a?void 0:a.textTracks[0];n&&(l?n.mode="showing":n.mode="disabled"),e.appInFocus&&!s&&(this.logPlaybackPerformance(v.$f,{initiator:"update"}),this.logSessionStartOnNextPlay=!0),e.visible&&!1===r&&(this.logSessionStartOnNextPlay=!1,this.updatePauseDuration(),this.logPlaybackPerformance(v.$f,{initiator:"update"})),!1===e.visible&&!0===r&&(this.videoVisibleTime=this.videoVisibleTime||new Date,i?(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(v.DR,{initiator:"update"})):this.logSessionStartOnNextPlay=!0),i&&s&&this.logSessionStartOnNextPlay&&(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(v.DR,{initiator:"update"}),this.logSessionStartOnNextPlay=!1)}),f(this,"addSegment",()=>{let{canPlayTime:e,loadStartTime:t,segments:a,srcString:i}=this.playbackPerformance,r=-1;e&&t&&0===a.length&&(r=e>t?e-t:0);let s=this.videoPlayerRef&&this.videoPlayerRef.video,o={indicatedKbps:-1,duration:s&&s.duration*v.gJ||-1,lastStartPlayTime:null,level:-1,numServerAddressChange:-1,observedKbps:-1,playbackStartDate:null,serverAddress:"",sourceWidth:-1,sourceHeight:-1,startupTimeMs:r,switchBitrateKbps:-1,uri:i,viewportWidth:s&&s.clientWidth||-1,viewportHeight:s&&s.clientHeight||-1,watchedDurationMs:0};a.push(o)}),f(this,"getCurrentVideoTime",()=>this.videoPlayerRef&&this.videoPlayerRef.video?this.videoPlayerRef.video.currentTime*v.gJ:0),f(this,"getVideoResourceTiming",()=>{var e,t;if(null!==(e=window)&&void 0!==e&&null!==(t=e.performance)&&void 0!==t&&t.getEntriesByName&&this.playbackPerformance.srcString){let e=window.performance.getEntriesByName(this.playbackPerformance.srcString);return e.length>0&&e[0]||null}return null}),f(this,"handleCanPlayVideo",e=>{let{contextLogData:t={},onReady:a,playing:i}=this.props,{is_closeup_video:r=!1}=t,{canPlayVideo:s}=this.state;(0,m.tE)("handleCanPlayVideo",!1,r,{firstCanPlayEvent:!s,playing:i}),this.playbackPerformance.hasFatalError=!1,s||(this.playbackPerformance.canPlayTime=new Date),this.setState({canPlayVideo:!0}),a&&a(e)}),f(this,"handleEnded",e=>{let{loop:t,onEnded:a}=this.props,{segments:i}=this.playbackPerformance,r=i&&i[i.length-1];t&&this.videoPlayerRef&&this.videoPlayerRef.video?(this.updateWatchDurationForCurrentSegment(),r&&(r.lastStartPlayTime=0),this.hasSegmentStarted=!1):t||this.logPlaybackPerformance(v.$f,{initiator:"videoEnded",loop:t}),this.setState({playbackState:v.Cy.ENDED}),a&&a(e)}),f(this,"handleError",()=>{var e,t,a,i,r,s,o,l;let{contextLogData:n={}}=this.props,{is_closeup_video:d=!1}=n,h=this.videoPlayerRef&&this.videoPlayerRef.video;(null==h?void 0:null===(e=h.error)||void 0===e?void 0:e.code)!==v.lG.MEDIA_ERR_ABORTED&&(this.playbackPerformance.hasFatalError=!0),this.playbackPerformance.detailedErrors+=`${this.playbackPerformance.detailedErrors.length>0?", ":""}${(null==h?void 0:null===(t=h.error)||void 0===t?void 0:t.message)||""}`,this.playbackPerformance.errorCode=(null==h?void 0:null===(a=h.error)||void 0===a?void 0:a.code)||0,this.playbackPerformance.errorName=(null==h?void 0:null===(i=h.error)||void 0===i?void 0:null===(r=i.message)||void 0===r?void 0:r.slice(0,100))||"unknown",this.playbackPerformance.errorReason=(null==h?void 0:null===(s=h.error)||void 0===s?void 0:null===(o=s.message)||void 0===o?void 0:o.slice(0,100))||"unknown";let u={errorName:this.playbackPerformance.errorCode,errorReason:this.playbackPerformance.errorName,errorRetryCount:this.errorRetryCount,playbackState:this.state.playbackState,networkState:(null==h?void 0:h.networkState)||"unknown"};switch((0,m.tE)("fatalError",!1,d,u),null==h?void 0:null===(l=h.error)||void 0===l?void 0:l.code){case v.lG.MEDIA_ERR_ABORTED:break;case v.lG.MEDIA_ERR_NETWORK:case v.lG.MEDIA_ERR_DECODE:case v.lG.MEDIA_ERR_SRC_NOT_SUPPORTED:default:this.errorRetryCount>0&&(null==h||h.load(),this.errorRetryCount-=1)}this.updateWatchDurationForCurrentSegment(),this.setState({playbackState:v.Cy.FAILED})}),f(this,"handleLoadedMetadata",()=>{this.setState({playbackState:v.Cy.LOADED_METADATA})}),f(this,"handleLoadStart",()=>{this.playbackPerformance.loadStartTime=new Date,this.setState({playbackState:v.Cy.LOAD_START})}),f(this,"handleLoadedData",()=>{this.setState({playbackState:v.Cy.LOADED_DATA})}),f(this,"handlePlaying",()=>{this.playbackPerformance.hasFatalError=!1,this.setPlaybackStartTime(),this.hasSegmentStarted||this.addSegment(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.updateStallDuration(),this.updatePauseDuration(),this.setState({playbackState:v.Cy.PLAYING}),this.props.clearSeekTime&&this.props.clearSeekTime()}),f(this,"handleUserPause",({event:e})=>{let{onControlsPause:t}=this.props;this.lastPauseTime=new Date,t&&t({event:e})}),f(this,"handleVideoPause",()=>{this.state.playbackState===v.Cy.STALLING||this.state.playbackState===v.Cy.SEEKING||(this.updateWatchDurationForCurrentSegment(),this.lastPauseTime||this.updateStallDuration()),this.setState({playbackState:v.Cy.PAUSED})}),f(this,"handleSeeking",()=>{this.playbackPerformance.numberOfSeeks+=1;let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&(t.lastStartPlayTime=null),this.state.playbackState!==v.Cy.ENDED&&this.setState({playbackState:v.Cy.SEEKING})}),f(this,"handleStalled",()=>{null===this.lastStallTime&&this.state.playbackState!==v.Cy.ENDED&&(this.lastStallTime=new Date,this.playbackPerformance.numberOfStalls+=1,this.setState({playbackState:v.Cy.STALLING}))}),f(this,"handleTimeUpdate",e=>{let{onTimeChange:t}=this.props;t&&t(e),this.state.playbackState===v.Cy.PLAYING&&(this.updateWatchDurationForCurrentSegment(),this.setLastSegmentStartPlayTime())}),f(this,"resetPlaybackMetrics",()=>{this.hasSegmentStarted=!0,this.hasPlaybackStarted=!1,this.hasVideoSessionStarted=!1,this.hasVideoSessionEnded=!0,this.lastStallTime=null,this.lastPauseTime=null,this.videoSessionId="",this.videoVisibleTime=null,this.logSessionStartOnNextPlay=!1;let e=this.playbackPerformance.segments[this.playbackPerformance.segments.length-1],t={...e,lastStartPlayTime:null,playbackStartDate:null,watchedDurationMs:0};this.playbackPerformance.detailedErrors="",this.playbackPerformance.errorCode=0,this.playbackPerformance.errorName="",this.playbackPerformance.errorReason="",this.playbackPerformance.hasFatalError=!1,this.playbackPerformance.numberOfStalls=0,this.playbackPerformance.numberOfSeeks=0,this.playbackPerformance.playbackStartTimestamp=null,this.playbackPerformance.totalStallDurationMs=0,this.playbackPerformance.segments=[t]}),f(this,"setLastSegmentStartPlayTime",()=>{let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.lastStartPlayTime&&(t.lastStartPlayTime=this.getCurrentVideoTime())}),f(this,"setLastSegmentPlaybackStartDate",()=>{let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.playbackStartDate&&(t.playbackStartDate=Date.now())}),f(this,"setPlaybackStartTime",()=>{this.hasPlaybackStarted||(this.playbackPerformance.playbackStartTimestamp=Date.now(),this.hasPlaybackStarted=!0)}),f(this,"setVideoPlayerRef",e=>{let{setVideoRef:t}=this.props;if(e&&(t&&t(e),this.videoPlayerRef=e,this.videoPlayerRef.video)){let e=this.videoPlayerRef.video;e.addEventListener("loadedmetadata",this.handleLoadedMetadata),e.addEventListener("loadeddata",this.handleLoadedData),e.addEventListener("pause",this.handleVideoPause),e.readyState>=3&&(this.setState({canPlayVideo:!0}),this.playbackPerformance.canPlayTime=new Date)}}),f(this,"updateStallDuration",()=>{if(null!==this.lastStallTime){let{lastStallTime:e}=this;this.playbackPerformance.totalStallDurationMs+=new Date-e,this.lastStallTime=null}}),f(this,"updatePauseDuration",()=>{if(null!==this.lastPauseTime){let{lastPauseTime:e}=this;this.playbackPerformance.totalPauseDurationMs+=new Date-e,this.lastPauseTime=null}}),f(this,"updateWatchDurationForCurrentSegment",()=>{let{segments:e}=this.playbackPerformance,t=e&&e[e.length-1],a=t?t.lastStartPlayTime:null,i=this.getCurrentVideoTime();if(t&&null!==a&&"number"==typeof i&&"number"==typeof a){let e=i-a;e>0&&(t.watchedDurationMs+=e,t.lastStartPlayTime=null)}}),f(this,"logPlaybackPerformance",(e,t)=>{let{contextLogData:a={},userId:i,isAutoPlay:r,logContextEvent:s,preload:o}=this.props,{is_closeup_video:l=!1}=a,{canPlayTime:n,detailedErrors:d,errorCode:h,errorName:u,errorReason:c,hasFatalError:p,loadStartTime:y,totalPauseDurationMs:P,totalStallDurationMs:S,numberOfStalls:f,numberOfSeeks:b,playbackStartTimestamp:g,segments:k,srcString:T}=this.playbackPerformance,D=this.videoPlayerRef&&this.videoPlayerRef.video,R=e===v.DR,E=R&&!this.hasVideoSessionStarted,C=!R&&!this.hasVideoSessionEnded&&this.hasVideoSessionStarted;if(D&&(E||C)){var V;let E=-1;n&&y&&(E=n>y?n-y:0);let C=-1;n&&this.videoVisibleTime&&(C=n>this.videoVisibleTime?n-this.videoVisibleTime:0),R&&(this.videoSessionId=(0,v.Y7)(i),this.playerId=this.playerId||(0,v.EB)());let w=this.getVideoResourceTiming(),x={averageVideoKbps:-1,autoplaying:r,detailedErrors:d,downloadedKiloBytes:"number"==typeof(null==w?void 0:w.decodedBodySize)&&w.decodedBodySize/v.Fm||0,errorCode:h,errorName:u,errorReason:c,fatalError:p,isCellular:!1,nativeVideoDurationMs:D.duration*v.gJ||-1,numberOfStalls:f,numberOfSeeks:b,overallPausedDurationMs:P,overallBufferDurationMs:S,overallWatchedDurationMs:-1,rebufferRate:-1,playbackSessionId:this.videoSessionId,playbackStartTimestamp:g||-1,segments:[],sessionMark:e,screenPixelScale:null!==(V=window)&&void 0!==V&&V.devicePixelRatio?window.devicePixelRatio:-1,startupPlayerWidth:D.clientWidth,startupPlayerHeight:D.clientHeight,startupTimeMs:E,startupLatencyMs:C,startupVariantKbps:-1,startupVariantWatchedDurationMs:-1,startupVariantWidth:D.videoWidth,startupVariantHeight:D.videoHeight,videoUrl:T,wasVideoPreloaded:"auto"===o};if(!R){this.updateWatchDurationForCurrentSegment(),this.updateStallDuration();let e=k.reduce((e,t)=>e+(t.watchedDurationMs||0),0);x.overallWatchedDurationMs=e,x.startupVariantWatchedDurationMs=e,x.segments=this.playbackPerformance.segments,0===e?(x.errorName="invalid_watch_duration",x.rebufferRate=-1):x.rebufferRate=S/e}(0,m.ZP)(x,!1,l,{playbackState:this.state.playbackState,...t});let{view:L,viewParameter:A,component:I,element:_,objectId:O,...M}=a;s({event_type:3606,event_data:{videoPerformanceData:x},view_type:L,view_parameter:A,component:I,element:_,object_id_str:O,aux_data:{...M,is_closeup_video:l,playback_session_id:this.videoSessionId}}),R?(this.hasVideoSessionStarted=!0,this.hasVideoSessionEnded=!1):this.resetPlaybackMetrics(),(0,m.tE)(R?"sessionStart":"sessionEnd",!1,l,{playbackState:this.state.playbackState,...t})}})}componentWillUnmount(){let{loop:e}=this.props;this.updatePauseDuration(),this.logPlaybackPerformance(v.$f,{initiator:"unmount",loop:e})}render(){let{aspectRatio:e,captions:t,controls:a,loop:s,loopOverride:o,objectFit:l,onDurationChange:n,onFullscreenChange:d,onLoadedChange:h,onControlsPlay:u,onPlayheadDown:p,onPlayheadUp:y,onSeek:m,onVolumeChange:v,playbackRate:f,playing:g,playsInline:k,poster:T,preload:D,src:R,volume:E}=this.props,{canPlayVideo:C,videoStartTime:V}=this.state;return(0,S.jsxs)(i.Fragment,{children:[(0,S.jsx)(c.Z,{unsafeCSS:P.P}),(0,S.jsx)(r.nk,{autoplay:C&&g,aspectRatio:e,captions:t,controls:a,loop:void 0===o?s:o,objectFit:l,onDurationChange:n,onEnded:this.handleEnded,onError:this.handleError,onFullscreenChange:d,onLoadedChange:h,onLoadStart:this.handleLoadStart,onControlsPause:this.handleUserPause,onControlsPlay:u,onPlaying:this.handlePlaying,onPlayheadDown:p,onPlayheadUp:y,onReady:this.handleCanPlayVideo,onSeek:m,onSeeking:this.handleSeeking,onStalled:this.handleStalled,onTimeChange:this.handleTimeUpdate,onVolumeChange:v,onWaiting:this.handleStalled,playbackRate:f,onPlay:()=>{},onPlayError:()=>{},playing:C&&g,playsInline:k,poster:T,preload:D,ref:this.setVideoPlayerRef,src:b(R,this.props.quicExpGroup),startTime:V||void 0,volume:E})]})}}let k=(0,i.memo)(function(e){let{logContextEvent:t}=(0,u.v)(),{country:a,isAuthenticated:i,isBot:r,isSocialBot:s,unauthId:n,userAgent:d}=(0,o.B)(),{browserName:c,browserVersion:v,isMobile:P}=d,{contextLogData:f={}}=e,{is_closeup_video:b=!1,view:k,viewParameter:T}=f,{appUI:{appInFocus:D}}=(0,h.I)(),{checkExperiment:R}=(0,p.F)(),{clearSeekTime:E}=(0,l.RC)(),C=null;i&&(C=R("web_video_quic").group.length?R("web_video_quic").group:null);let V=(0,y.Z)();return(0,m.r$)({browserName:c,browserVersion:v,country:a,isAuthenticated:i,isBot:r,is_closeup_video:b,isMobile:P,isSocialBot:s,view:k,viewParameter:T}),(0,S.jsx)(g,{...e,userId:V.id||n,appInFocus:D,quicExpGroup:C,logContextEvent:t,clearSeekTime:E})});function T(e,t,a){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:String(i))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let D=e=>{if(Array.isArray(e)){let t=e.find(e=>"video/m3u8"===e.type);return t?t.src:void 0}return/m3u8$/.test(e)?e:void 0};class R extends i.PureComponent{constructor(e){super(e),T(this,"componentDidUpdate",e=>{var t;e.videoStartTime&&this.props.videoStartTime&&e.videoStartTime<this.props.videoStartTime&&null!==(t=this.videoPlayerRef)&&void 0!==t&&t.video&&(this.videoPlayerRef.video.currentTime=this.props.videoStartTime)}),T(this,"setVideoPlayerRef",e=>{e&&(this.videoPlayerRef=e)}),T(this,"handleOnEnded",({event:e})=>{let{loop:t,onLoop:a,onEnded:i}=this.props;i&&(i({event:e}),this.videoPlayerRef&&this.videoPlayerRef.video&&t&&(this.videoPlayerRef.video.play(),a&&a()))});let t=D(e.src);this.state={useHlsVideo:!e.preferMp4&&!(0,s.G6)(e.requestContext.userAgent.browserName)&&!!t}}render(){let{aspectRatio:e,appInFocus:t,backgroundColor:a,captions:i,toggleCaptions:r,clearSeekTime:s,contextLogData:o,controls:l,hlsConfig:d,isAutoPlay:h,loop:u,objectFit:c,onDurationChange:p,onEnded:y,onFullscreenChange:m,onLoadedChange:v,onControlsPause:P,onControlsPlay:f,onPlayheadDown:b,onPlayheadUp:g,onReady:T,onSeek:R,onTimeChange:E,onVolumeChange:C,playbackRate:V,playing:w,playsInline:x,poster:L,preferMp4:A,preload:I,seekTime:_,src:O,videoStartTime:M,visible:N,volume:F}=this.props,{useHlsVideo:j}=this.state,U=D(O),W={...d,startPosition:M||-1},H=!y&&u;return j&&U?(0,S.jsx)(n.Z,{aspectRatio:e,appInFocus:t,backgroundColor:a,captions:i,clearSeekTime:s,contextLogData:o,controls:l,hlsConfig:W,isAutoPlay:h,loop:u,loopOverride:H,objectFit:c,onDurationChange:p,onEnded:this.handleOnEnded,onFullscreenChange:m,onLoadedChange:v,onControlsPause:P,onControlsPlay:f,onPlayheadDown:b,onPlayheadUp:g,onReady:T,onSeek:R,onTimeChange:E,onVolumeChange:C,playbackRate:V,onPlay:()=>{},onPlayError:()=>{},playing:w,playsInline:x,poster:L,preload:I,seekTime:_,setVideoRef:this.setVideoPlayerRef,src:U,visible:N,volume:F}):(0,S.jsx)(k,{aspectRatio:e,captions:i,captionsEnabled:r,clearSeekTime:s,contextLogData:o,controls:l,isAutoPlay:h,loop:u,loopOverride:H,objectFit:c,onDurationChange:p,onEnded:this.handleOnEnded,onFullscreenChange:m,onLoadedChange:v,onControlsPause:P,onControlsPlay:f,onPlayheadDown:b,onPlayheadUp:g,onReady:T,onSeek:R,onTimeChange:E,onVolumeChange:C,playbackRate:V,onPlay:()=>{},onPlayError:()=>{},playing:w,playsInline:x,poster:L,preload:I,seekTime:_,setVideoRef:this.setVideoPlayerRef,src:A?O:U||O,videoStartTime:M,visible:N,volume:F})}}function E(e){let{appUI:{appInFocus:t}}=(0,h.I)(),{seekTime:a}=(0,l.Hx)(),{captionsEnabled:i}=(0,d.r)(),{clearSeekTime:r}=(0,l.RC)(),s=(0,o.B)();return(0,S.jsx)(R,{...e,appInFocus:t,requestContext:s,clearSeekTime:r,toggleCaptions:i,seekTime:a})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/73383-e035516968bd9aaf.mjs.map