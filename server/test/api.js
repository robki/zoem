let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();
let config = require("../../config");


let mongoose = require("mongoose");
mongoose.connect(config.MONGODBURL);

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

describe('/GET 1 user', () => {
    it('it should GET 1 user', (done) => {
      chai.request(server)
          .get('/api/getusers/1')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(1);
            done();
          });
    });
});