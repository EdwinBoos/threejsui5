sap.ui.define(['influenz/de/sample/util/THREEBaseLight'],function(THREEBaseLight){'use strict';return THREEBaseLight.extend("influenz.de.sample.util.THREEAmbientLight",{metadata:{properties:{}},onBeforeRendering:function onBeforeRendering(){this.ambientLight=new THREE.AmbientLight(this.getColor());},getAmbientLight:function getAmbientLight(){return this.ambientLight;},renderer:{render:function render(rendererManager,control){}},onAfterRendering:{}});});