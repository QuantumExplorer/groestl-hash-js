'use strict';

var x11 = require('../');
var expect    = require("chai").expect;

var fox = 'The quick brown fox jumps over the lazy dog';
var empty = '';
var dish = 'Groestl is an Austrian dish, usually made of leftover potatoes and pork, cut into slice.';
var longDream = 'Take this kiss upon the brow! And, in parting from you now, Thus much let me avow-- You are not wrong, who deem That my days have been a dream; Yet if hope has flown away In a night, or in a day, In a vision, or in none, Is it therefore the less gone? All that we see or seem Is but a dream within a dream. I stand amid the roar Of a surf-tormented shore, And I hold within my hand Grains of the golden sand-- How few! yet how they creep Through my fingers to the deep, While I weep--while I weep! O God! can I not grasp Them with a tighter clasp? O God! can I not save One from the pitiless wave? Is all that we see or seem But a dream within a dream?';
var int32 = [-1245000620, -1578223460, 654805539, -1068884769, -968029107, -8582190, 491541657, 290156804, 1046922525, 1254877013, -1307320917, 1691597203, 55068107, 1715389297, 252729336, 127805489];

describe("groestl Hash Functions", function() {
  
  describe("long", function() {
    it("empty string", function() {
      expect(x11.groestl512(empty)).to.equal("6d3ad29d279110eef3adbd66de2a0345a77baede1557f5d099fce0c03d6dc2ba8e6d4a6633dfbd66053c20faa87d1a11f39a7fbe4a6c2f009801370308fc4ad8");
    });
    it("fox string", function() {
      expect(x11.groestl512(fox)).to.equal("badc1f70ccd69e0cf3760c3f93884289da84ec13c70b3d12a53a7a8a4a513f99715d46288f55e1dbf926e6d084a0538e4eebfc91cf2b21452921ccde9131718d");
    });
    it("dish string", function() {
      expect(x11.groestl512(dish)).to.equal("eefdf4c9d6b6fd53390049388de8974525b406206114a8885016aa36619652535835a22ab0be05a81ea15f47ebaed9c236a79f354f699e45b6a7aebc9648695d");
    });
    it("dream string", function() {
      expect(x11.groestl512(longDream)).to.equal("c678ea36128ff654d371609b3d68e509e99a0920c076b0214600a5184e6bdadfc4cd37b02a33dbdd2374b1151f2f07a7fcde61d56333dbc85d1791f6dc1d0b61");
    });
    it("int32", function() {
      expect(x11.groestl512(int32,2)).to.equal("b62c929b4db0a8a15fa862b1cf6b5043b939fef6be0659d2efb5c0089f53620e40d113c8e441c5009fbba6dd098992da0d357fb27b2bf29ec21887d780ae2ec2");
    });
  });
  
  describe("single", function() {
    it("dish string", function() {
      expect(x11.groestl(dish)).to.equal("eefdf4c9d6b6fd53390049388de8974525b406206114a8885016aa3661965253");
    });
  });
  
  describe("double", function() {
    it("dish string", function() {
      expect(x11.groestl_2(dish)).to.equal("55415989225c5c902f5003679a98fac117555890a7c3119ab1d570c89e77b072");
    });
  });
});