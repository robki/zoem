let mongoose = require("mongoose");
let Book = require("../data/models/user");

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();

chai.use(chaiHttp);


describe('/GET user', () => {
    it('it should GET all the users', (done) => {
      chai.request(server)
          .get('/api/getusers')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(6);
            done();
          });
    });
});