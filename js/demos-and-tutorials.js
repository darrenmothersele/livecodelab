/*jslint browser: true, nomen: true, devel: true */
/*global frenchVersion, $, Detector, forceCanvasRenderer, userWarnedAboutWebglExamples: true, fakeText, undimEditor, editor, doTheSpinThingy: true, shrinkFakeText*/

'use strict';

var roseDemo = [
    "// 'A rose' by Guy John",
    "// Mozilla Festival 2012",
    "// adapted from 'A rose' by Lib4tech",
    "",
    "scale 1.5",
    "animationStyle paintOver",
    "rotate frame/100",
    "fill 255-((frame/2)%255),0,0",
    "stroke 255-((frame/2)%255),0,0",
    "scale 1-((frame/2)%255) / 255",
    "box"].join("\n").replace(/\u25B6/g, "\t");

var cheeseAndOlivesDemo = [
    "// 'Cheese and olives' by",
    "// Davina Tirvengadum",
    "// Mozilla festival 2012",
    "",
    "background white",
    "scale .3",
    "move 0,-1",
    "fill yellow",
    "stroke black",
    "rotate",
    "strokeSize 3",
    "line 4",
    "box",
    "",
    "rotate 2,3",
    "move 0,3",
    "scale .3",
    "fill black",
    "stroke black",
    "ball",
    "",
    "rotate 3",
    "move 5",
    "scale 1",
    "fill green",
    "stroke green",
    "ball",
    "",
    "rotate 1",
    "move -3",
    "scale 1",
    "fill yellow",
    "stroke yellow",
    "ball"].join("\n").replace(/\u25B6/g, "\t");

var simpleCubeDemo = [
    "// there you go!",
    "// a simple cube!",
    "",
    "background yellow",
    "rotate 0,time/2000,time/2000",
    "box"].join("\n").replace(/\u25B6/g, "\t");

var webgltwocubesDemo = [
    "background 155,255,255",
    "2 times ->",
    "▶rotate 0, 1, time/2000",
    "▶box"].join("\n").replace(/\u25B6/g, "\t");

var cubesAndSpikes = [
    "simpleGradient fuchsia,color(100,200,200),yellow",
    "scale 2.1",
    "5 times ->",
    "▶rotate 0,1,time/5000",
    "▶box 0.1,0.1,0.1",
    "▶move 0,0.1,0.1",
    "▶3 times ->",
    "▶▶rotate 0,1,1",
    "▶▶box 0.01,0.01,1"].join("\n").replace(/\u25B6/g, "\t");

var webglturbineDemo = [
    "background 155,55,255",
    "70 times ->",
    "▶rotate time/100000,1,time/100000",
    "▶box"].join("\n").replace(/\u25B6/g, "\t");

var webglzfightartDemo = [
    "// Explore the artifacts",
    "// of your GPU!",
    "// Go Z-fighting, go!",
    "scale 5",
    "rotate",
    "fill red",
    "box",
    "rotate 0.000001",
    "fill yellow",
    "box"].join("\n").replace(/\u25B6/g, "\t");

var littleSpiralOfCubes = [
    "background orange",
    "scale 0.1",
    "10 times ->",
    "▶rotate 0,1,time/1000",
    "▶move 1,1,1",
    "▶box"].join("\n").replace(/\u25B6/g, "\t");

var tentacleDemo = [
    "background 155,255,155",
    "scale 0.15",
    "3 times ->",
    "▶rotate 0,1,1",
    "▶10 times ->",
    "▶▶rotate 0,1,time/1000",
    "▶▶scale 0.9",
    "▶▶move 1,1,1",
    "▶▶box"].join("\n").replace(/\u25B6/g, "\t");

var lampDemo = [
    "animationStyle motionBlur",
    "simpleGradient red,yellow,color(255,0,255)",
    "//animationStyle paintOver",
    "scale 2",
    "rotate time/4000, time/4000,  time/4000",
    "90 times ->",
    "▶rotate time/200000, time/200000,  time/200000",
    "▶line",
    "▶move 0.5,0,0",
    "▶line",
    "▶move -0.5,0,0",
    "▶line",
    "▶line"].join("\n").replace(/\u25B6/g, "\t");

var trillionfeathersDemo = [
    "animationStyle paintOver",
    "move 2,0,0",
    "scale 2",
    "rotate",
    "20 times ->",
    "▶rotate",
    "▶move 0.25,0,0",
    "▶line",
    "▶move -0.5,0,0",
    "▶line"].join("\n").replace(/\u25B6/g, "\t");

var monsterblobDemo = [
    "ballDetail 6",
    "animationStyle motionBlur",
    "rotate time/5000",
    "simpleGradient fuchsia,aqua,yellow",
    "5 times ->",
    "▶rotate 0,1,time/5000",
    "▶move 0.2,0,0",
    "▶3 times ->",
    "▶▶rotate 1",
    "▶▶ball -1"].join("\n").replace(/\u25B6/g, "\t");

var industrialMusicDemo = [
    "bpm 88",
    "play 'alienBeep'  ,'zzxz zzzz zzxz zzzz'",
    "play 'beepC'  ,'zxzz zzzz xzzx xxxz'",
    "play 'beepA'  ,'zzxz zzzz zzxz zzzz'",
    "play 'lowFlash'  ,'zzxz zzzz zzzz zzzz'",
    "play 'beepB'  ,'xzzx zzzz zxzz zxzz'",
    "play 'voltage'  ,'xzxz zxzz xzxx xzxx'",
    "play 'tranceKick'  ,'zxzx zzzx xzzz zzxx'"].join("\n").replace(/\u25B6/g, "\t");

var trySoundsDemo = [
    "bpm 88",
    "// leave this one as base",
    "play 'tranceKick'  ,'zxzx zzzx xzzz zzxx'",
    "",
    "// uncomment the sounds you want to try",
    "//play 'toc'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'highHatClosed'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'highHatOpen'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'toc2'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'toc3'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'toc4'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'snare'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'snare2'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'china'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'crash'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'crash2'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'crash3'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'ride'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'glass'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'glass1'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'glass2'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'glass3'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'thump'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'lowFlash'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'lowFlash2'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'tranceKick2'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'tranceKick'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'wosh'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'voltage'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'beepA'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'beepB'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'beepC'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'beepD'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'beep'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'hello'  ,'zzxz zzzz zzxz zzzz'",
    "//play 'alienBeep'  ,'zzxz zzzz zzxz zzzz'"].join("\n").replace(/\u25B6/g, "\t");

var springysquaresDemo = [
    "animationStyle motionBlur",
    "simpleGradient fuchsia,color(100,200,200),yellow",
    "scale 0.3",
    "3 times ->",
    "▶move 0,0,0.5",
    "▶5 times ->",
    "▶▶rotate time/2000",
    "▶▶move 0.7,0,0",
    "▶▶rect"].join("\n").replace(/\u25B6/g, "\t");

var diceDemo = [
    "animationStyle motionBlur",
    "simpleGradient color(255),moccasin,peachpuff",
    "stroke 255,100,100,255",
    "fill red,155",
    "move -0.5,0,0",
    "scale 0.3",
    "3 times ->",
    "▶move 0,0,0.5",
    "▶1 times ->",
    "▶▶rotate time/1000",
    "▶▶move 2,0,0",
    "▶▶box"].join("\n").replace(/\u25B6/g, "\t");

var webglalmostvoronoiDemo = [
    "scale 10",
    "2 times ->",
    "▶rotate 0,1,time/10000",
    "▶ball -1"].join("\n").replace(/\u25B6/g, "\t");

var webglshardsDemo = [
    "scale 10",
    "fill 0",
    "strokeSize 7",
    "5 times ->",
    "▶rotate 0,1,time/20000",
    "▶ball ",
    "▶rotate 0,1,1",
    "▶ball -1.01"].join("\n").replace(/\u25B6/g, "\t");

var webglredthreadsDemo = [
    "scale 10.5",
    "background black",
    "stroke red",
    "noFill",
    "strokeSize 7",
    "5 times ->",
    "▶rotate time/20000",
    "▶ball",
    "▶rotate 0,1,1",
    "▶ball"].join("\n").replace(/\u25B6/g, "\t");

var webglnuclearOctopusDemo = [
    "simpleGradient black,color(0,0,(time/5)%255),black",
    "scale 0.2",
    "move 5,0,0",
    "animationStyle motionBlur",
    "//animationStyle paintOver",
    "stroke 255,0,0,120",
    "fill time%255,0,0",
    "pushMatrix",
    "count = 0",
    "3 times ->",
    "▶count++",
    "▶pushMatrix",
    "▶rotate count+3+time/1000,2+count + time/1000,4+count",
    "▶120 times ->",
    "▶▶scale 0.9",
    "▶▶move 1,1,0",
    "▶▶rotate time/100",
    "▶▶box",
    "▶popMatrix"].join("\n").replace(/\u25B6/g, "\t");


var introTutorial = [
    "// Lines beginning with two",
    "// slashes (like these) are just comments.",
    "",
    "// Everything else is run",
    "// about 30 to 60 times per second",
    "// in order to create an animation.",
    "",
    "// Click the link below to start the tutorial.",
    "",
    "// next-tutorial:hello_world"].join("\n").replace(/\u25B6/g, "\t");

var helloworldTutorial = [
    "// type these three letters",
    "// in one of these empty lines below:",
    "// 'b' and 'o' and 'x'",
    "",
    "",
    "",
    "// (you should then see a box facing you)",
    "// click below for the next tutorial",
    "// next-tutorial:some_notes"].join("\n").replace(/\u25B6/g, "\t");

var somenotesTutorial = [
    "// If this makes sense to you:",
    "// the syntax is similar to Coffeescript",
    "// and the commands are almost",
    "// like Processing.",
    "",
    "// If this doesn't make sense to you",
    "// don't worry.",
    "",
    "// next-tutorial:rotate"].join("\n").replace(/\u25B6/g, "\t");

var rotateTutorial = [
    "// now that we have a box",
    "// let's rotate it:",
    "// type 'rotate 1' in the",
    "// line before the 'box'",
    "",
    "",
    "box",
    "",
    "// click for the next tutorial:",
    "// next-tutorial:frame"].join("\n").replace(/\u25B6/g, "\t");

var frameTutorial = [
    "// make the box spin",
    "// by replacing '1' with 'frame'",
    "",
    "rotate 1",
    "box",
    "",
    "// 'frame' contains a number",
    "// always incrementing as",
    "// the screen is re-drawn.",
    "// (use 'frame/100' to slow it down)",
    "// next-tutorial:time"].join("\n").replace(/\u25B6/g, "\t");

var timeTutorial = [
    "// 'frame/100' has one problem:",
    "// faster computers will make",
    "// the cube spin too fast.",
    "// Replace it with 'time/2000'.",
    "",
    "rotate frame/100",
    "box",
    "",
    "// 'time' counts the",
    "// number of milliseconds since",
    "// the program started, so it's",
    "// independent of how fast",
    "// the computer is at drawing.",
    "// next-tutorial:move"].join("\n").replace(/\u25B6/g, "\t");

var moveTutorial = [
    "// you can move any object",
    "// by using 'move'",
    "",
    "box",
    "move 1,1,0",
    "box",
    "",
    "// try to use a rotate before",
    "// the first box to see how the",
    "// scene changes.",
    "// next-tutorial:scale"].join("\n").replace(/\u25B6/g, "\t");

var scaleTutorial = [
    "// you can make an object bigger",
    "// or smaller by using 'scale'",
    "",
    "rotate 3",
    "box",
    "move 1",
    "scale 2",
    "box",
    "",
    "// try to use scale or move before",
    "// the first box to see how the",
    "// scene changes.",
    "// next-tutorial:times"].join("\n").replace(/\u25B6/g, "\t");

var timesTutorial = [
    "// 'times' (not to be confused with",
    "// 'time'!) can be used to",
    "// repeat operations like so:",
    "",
    "rotate 1",
    "3 times ->",
    "▶move 0.2,0.2,0.2",
    "▶box",
    "",
    "// note how the tabs indicate",
    "// exactly the block of code",
    "// to be repeated.",
    "// next-tutorial:fill"].join("\n").replace(/\u25B6/g, "\t");

var fillTutorial = [
    "// 'fill' changes the",
    "// color of all the faces:",
    "",
    "rotate 1",
    "fill 255,255,0",
    "box",
    "",
    "// the three numbers indicate ",
    "// red green and blue values.",
    "// You can also use color names such as 'indigo'",
    "// Try replacing the numbers with",
    "// 'angleColor'",
    "// next-tutorial:stroke"].join("\n").replace(/\u25B6/g, "\t");

var strokeTutorial = [
    "// 'stroke' changes all the",
    "// edges:",
    "",
    "rotate 1",
    "strokeSize 5",
    "stroke 255,255,255",
    "box",
    "",
    "// the three numbers are RGB",
    "// but you can also use the color names",
    "// or the special color 'angleColor'",
    "// Also you can use 'strokeSize'",
    "// to specify the thickness.",
    "// next-tutorial:color_names"].join("\n").replace(/\u25B6/g, "\t");

var colornamesTutorial = [
    "// you can call colors by name",
    "// try to un-comment one line:",
    "//fill greenyellow",
    "//fill indigo",
    "//fill lemonchiffon // whaaaat?",
    "",
    "rotate 1",
    "box",
    "",
    "// more color names here:",
    "// http://html-color-codes.info/color-names/",
    "// (just use them in lower case)",
    "// next-tutorial:lights"].join("\n").replace(/\u25B6/g, "\t");


var lightsTutorial = [
    "// 'ambientLight' creates an",
    "// ambient light so things have",
    "// some sort of shading:",
    "",
    "ambientLight 0,255,255",
    "rotate time/1000",
    "box",
    "",
    "// you can turn that light on and ",
    "// off while you build the scene",
    "// by using 'lights' and 'noLights'",
    "// next-tutorial:background"].join("\n").replace(/\u25B6/g, "\t");

var backgroundTutorial = [
    "// 'background' creates a",
    "// solid background:",
    "",
    "background 0,0,255",
    "rotate time/1000",
    "box",
    "",
    "// next-tutorial:gradient"].join("\n").replace(/\u25B6/g, "\t");

var gradientTutorial = [
    "// even nicer, you can paint a",
    "// background gradient:",
    "",
    "simpleGradient color(190,10,10),color(30,90,100),color(0)",
    "rotate time/1000",
    "box",
    "",
    "// next-tutorial:line"].join("\n").replace(/\u25B6/g, "\t");

var lineTutorial = [
    "// draw lines like this:",
    "",
    "20 times ->",
    "▶rotate time/9000",
    "▶line",
    "",
    "// next-tutorial:ball"].join("\n").replace(/\u25B6/g, "\t");

var ballTutorial = [
    "// draw balls like this:",
    "",
    "ballDetail 10",
    "3 times ->",
    "▶move 0.2,0.2,0.2",
    "▶ball",
    "",
    "// ('ballDetail' is optional)",
    "// next-tutorial:pushpopMatrix"].join("\n").replace(/\u25B6/g, "\t");

var pushpopMatrixTutorial = [
    "// pushMatrix creates a bookmark of",
    "// the position, which you can",
    "// return to later by using popMatrix.",
    "// You can reset using 'resetMatrix'.",
    "",
    "rotate time/1000",
    "pushMatrix // bookmark the position after the rotation",
    "line",
    "move 0.5,0,0",
    "line",
    "popMatrix // go back to the bookmarked position",
    "move -0.5,0,0",
    "line",
    "resetMatrix // resets the position",
    "line // not affected by initial rotation",
    "// next-tutorial:animation_style"].join("\n").replace(/\u25B6/g, "\t");

var animationstyleTutorial = [
    "// try uncommenting either line",
    "// with the animationStyle",
    "",
    "background 255",
    "//animationStyle motionBlur",
    "//animationStyle paintOver",
    "rotate frame/10",
    "box",
    "",
    "// next-tutorial:do_once"].join("\n").replace(/\u25B6/g, "\t");

var doonceTutorial = [
    "// delete either check mark below",
    "",
    "rotate time/1000",
    "✓doOnce ->",
    "▶background 255",
    "▶fill 255,0,0",
    "✓doOnce -> ball",
    "box",
    "",
    "// ...the line or block of code",
    "// are ran one time only, after that the",
    "// check marks immediately re-appear",
    "// P.S. keep hitting the delete button",
    "// on that first check mark for seizures.",
    "// next-tutorial:conditionals"].join("\n").replace(/\u25B6/g, "\t");

var conditionalsTutorial = [
    "// you can draw different things",
    "// (or in general do different things)",
    "// based on any",
    "// test condition you want:",
    "",
    "rotate",
    "if frame%3 == 0",
    "▶box",
    "else if frame%3 == 1",
    "▶ball",
    "else",
    "▶peg",
    "",
    "// next-tutorial:autocode"].join("\n").replace(/\u25B6/g, "\t");

var autocodeTutorial = [
    "// the Autocode button invents random",
    "// variations for you.",
    "",
    "// You can interrupt the Autocoder at",
    "// any time by pressing the button again,",
    "// or you can press CTRL-Z",
    "// (or CMD-Z on Macs) to undo (or re-do) some of",
    "// the steps even WHILE the autocoder is running,",
    "// if you see that things got",
    "// boring down a particular path of changes."].join("\n").replace(/\u25B6/g, "\t");

function loadDemoOrTutorial(whichDemo) {

    if ((!Detector.webgl || forceCanvasRenderer) && !userWarnedAboutWebglExamples && whichDemo.indexOf('webgl') === 0) {
        userWarnedAboutWebglExamples = true;
        $('#exampleNeedsWebgl').modal();
        $('#simplemodal-container').height(200);
    }


    // set the demo as a hash state
    // so that ideally people can link directly to
    // a specific demo they like.
    // (in the document.ready function we check for
    // this hash value and load the correct demo)
    window.location.hash = 'bookmark=' + whichDemo;

    if (fakeText) {
        shrinkFakeText();
    }

    undimEditor();

    doTheSpinThingy = false;

    var prependMessage = "";
    if ((!Detector.webgl || forceCanvasRenderer) && whichDemo.indexOf('webgl') === 0) {
        prependMessage = [
            "// this drawing makes much more sense",
            "// in a WebGL-enabled browser"].join("\n").replace(/\u25B6/g, "\t");
    }

    switch (whichDemo) {
    case 'roseDemo':
        editor.setValue(prependMessage + roseDemo);
        break;
    case 'cheeseAndOlivesDemo':
        editor.setValue(prependMessage + cheeseAndOlivesDemo);
        break;
    case 'simpleCubeDemo':
        editor.setValue(prependMessage + simpleCubeDemo);
        break;
    case 'webgltwocubesDemo':
        editor.setValue(prependMessage + webgltwocubesDemo);
        break;
    case 'cubesAndSpikes':
        editor.setValue(prependMessage + cubesAndSpikes);
        break;
    case 'webglturbineDemo':
        editor.setValue(prependMessage + webglturbineDemo);
        break;
    case 'webglzfightartDemo':
        editor.setValue(prependMessage + webglzfightartDemo);
        break;
    case 'littleSpiralOfCubes':
        editor.setValue(prependMessage + littleSpiralOfCubes);
        break;
    case 'tentacleDemo':
        editor.setValue(prependMessage + tentacleDemo);
        break;
    case 'lampDemo':
        editor.setValue(prependMessage + lampDemo);
        break;
    case 'trillionfeathersDemo':
        editor.setValue(prependMessage + trillionfeathersDemo);
        break;
    case 'monsterblobDemo':
        editor.setValue(prependMessage + monsterblobDemo);
        break;
    case 'industrialMusicDemo':
        editor.setValue(prependMessage + industrialMusicDemo);
        break;
    case 'trySoundsDemo':
        editor.setValue(prependMessage + trySoundsDemo);
        break;
    case 'springysquaresDemo':
        editor.setValue(prependMessage + springysquaresDemo);
        break;
    case 'diceDemo':
        editor.setValue(prependMessage + diceDemo);
        break;
    case 'webglalmostvoronoiDemo':
        editor.setValue(prependMessage + webglalmostvoronoiDemo);
        break;
    case 'webglshardsDemo':
        editor.setValue(prependMessage + webglshardsDemo);
        break;
    case 'webglredthreadsDemo':
        editor.setValue(prependMessage + webglredthreadsDemo);
        break;
    case 'webglnuclearOctopusDemo':
        editor.setValue(prependMessage + webglnuclearOctopusDemo);
        break;
    case 'introTutorial':
        editor.setValue(prependMessage + introTutorial);
        break;
    case 'helloworldTutorial':
        editor.setValue(prependMessage + helloworldTutorial);
        break;
    case 'somenotesTutorial':
        editor.setValue(prependMessage + somenotesTutorial);
        break;
    case 'rotateTutorial':
        editor.setValue(prependMessage + rotateTutorial);
        break;
    case 'frameTutorial':
        editor.setValue(prependMessage + frameTutorial);
        break;
    case 'timeTutorial':
        editor.setValue(prependMessage + timeTutorial);
        break;
    case 'moveTutorial':
        editor.setValue(prependMessage + moveTutorial);
        break;
    case 'scaleTutorial':
        editor.setValue(prependMessage + scaleTutorial);
        break;
    case 'timesTutorial':
        editor.setValue(prependMessage + timesTutorial);
        break;
    case 'fillTutorial':
        editor.setValue(prependMessage + fillTutorial);
        break;
    case 'strokeTutorial':
        editor.setValue(prependMessage + strokeTutorial);
        break;
    case 'colornamesTutorial':
        editor.setValue(prependMessage + colornamesTutorial);
        break;
    case 'lightsTutorial':
        editor.setValue(prependMessage + lightsTutorial);
        break;
    case 'backgroundTutorial':
        editor.setValue(prependMessage + backgroundTutorial);
        break;
    case 'gradientTutorial':
        editor.setValue(prependMessage + gradientTutorial);
        break;
    case 'lineTutorial':
        editor.setValue(prependMessage + lineTutorial);
        break;
    case 'ballTutorial':
        editor.setValue(prependMessage + ballTutorial);
        break;
    case 'pushpopMatrixTutorial':
        editor.setValue(prependMessage + pushpopMatrixTutorial);
        break;
    case 'animationstyleTutorial':
        editor.setValue(prependMessage + animationstyleTutorial);
        break;
    case 'doonceTutorial':
        editor.setValue(prependMessage + doonceTutorial);
        break;
    case 'conditionalsTutorial':
        editor.setValue(prependMessage + conditionalsTutorial);
        break;
    case 'autocodeTutorial':
        editor.setValue(prependMessage + autocodeTutorial);
        break;
    }

    // bring the cursor to the top
    editor.setCursor(0, 0);

    // we want to avoid that the selected example
    // or tutorial when started paints over a screen with a previous drawing
    // of the previous code.
    // So basically we draw an empty frame.
    // a) make sure that animationStyle
    animationStyle(normal);
    // b) apply the potentially new animationStyle
    animationStyleUpdateIfChanged();
    // combing the display list now means that all items in the
    // display list are set to hidden because no draw() code has been ran
    // to put items in it.
    combDisplayList();
    // render the empty frame
    render();
    // register the new code so the next frame will be drawn using the new code.
    registerCode();

    // setting the value of the editor triggers the
    // codeMirror onChange callback, and that runs
    // the demo.
}