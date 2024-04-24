const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Import your Express app
const expect = chai.expect;

chai.use(chaiHttp);

describe('Pricing Module', () => {
 it('should calculate the total price for delivery', (done) => {
    chai.request(app)
      .post('/api/pricing/calculate')
      .send({
        zone: "central",
        organization_id: "005",
        total_distance: 12,
        item_type: "perishable"
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('total_price');
        expect(res.body.total_price).to.equal(20.5); // Assuming the calculation is correct
        done();
      });
 });

 // Add more test cases here, covering different scenarios and edge cases
});
