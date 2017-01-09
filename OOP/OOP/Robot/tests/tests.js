(function(){
  'use strict';
  var Robot = require('../main/main.js').Robot;

  describe("Robot Class: Create a Robot, make it move", function() {

    it("The robot should be a type of `object`, and an instance of the `Robot` class", function() {
      var chappie = new Robot('Chappie');
      expect(typeof chappie).toEqual(typeof {});
      expect(chappie instanceof Robot).toBeTruthy();
    });

    it("The robot should be called 'Red ax-100' if no name is passed as a parameter", function() {
      var rand_robot = new Robot();
      var rand_robot_two = new Robot(null);
      expect(rand_robot_two.name).toEqual('Red ax-100');
      expect(rand_robot_two.type).toBe('Ordinary Bot');
      expect(rand_robot.name).toEqual('Red ax-100');
      expect(rand_robot.type).toBe('Ordinary Bot');
    });

    it("The robot name and type should be a property of the robot", function() {
      var chappie  = new Robot('Chappie', 'Talking bot');
      var rand  = new Robot('Chappie', true);
      expect(chappie.name).toBe('Chappie');
      expect(chappie.type).toBe('Talking bot');
    });

    it("The robot shoud have two (2) legs except its a Motor Bot", function() {
      var adam  = new Robot('Adam', 'Boxing Bot');
      expect(adam.numOfLegs).toBe(2);

      var et = new Robot('ET', 'Motor Bot');
      expect(et.numOfLegs).toBe('Motor');
      et.drive(5);
      expect(et.drive(null)).toBe(false);
      expect(et.speed).toBe('150 km/h');
      expect((function(){return new Robot('Chappie', 'Talking Bot');}()).numOfLegs).toBe(2);
    });

    it("The robot speak function should return speak in either german or english only if it's a talking bot", function() {
      var slowBot  = new Robot('Slowpoke', 'Slow Motor Bot');
      var chappie = new Robot('Chappie', 'Talking Bot');
      expect(slowBot.speak()).toBe(false);
      expect(slowBot.speak('German')).toBe(false);
      expect(slowBot.speak('Spanish')).toBe(false);
      expect(chappie.speak()).toBe('My name is Chappie');
      expect(chappie.speak('German')).toBe('Mein nein ist Chappie');
      expect(chappie.speak('French')).toBe(null);
      expect(chappie.speak(null)).toBe(null);
      expect(chappie.speak([])).toBe(null);
      expect(chappie.speak(undefined)).toBe("My name is Chappie");
    
    });

    it("The robot should have two(2) hands except its an Octo Bot", function() {
      var octo  = new Robot('Octo', 'Octo Bot', 'trailer');
      expect(octo.numOfHands).toBe(8);

      var chappie = new Robot('Chappie', 'Talking Bot');
      expect(chappie.numOfHands).toBe(2);
    });

    it("The Slow Motor Bot should have speed 0 km/h until you put `the pedal to the metal`", function() {
      var slowBot  = new Robot('Slowpoke', 'Slow Motor Bot');
      expect(slowBot.speed).toBe('0 km/h');
      slowBot.drive(7);
      expect(slowBot.speed).toBe('77 km/h');
    });

    it("The robot drive function should return the instance of the Robot class", function() {
      var slowBot  = new Robot('Slowpoke', 'Slow Motor Bot');
      var drivingBot = slowBot.drive(7);
      expect(drivingBot instanceof Robot).toBeTruthy();
      expect(typeof drivingBot.drive).toBe(typeof (function (){}));  
      expect(slowBot.speed).toBe(drivingBot.speed);
    
    });

  });
})();