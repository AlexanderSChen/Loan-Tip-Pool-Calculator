describe('calculateMonthlyPayment()', () => {
  it('should calculate the monthly rate correctly', function () {
    // ...
    let values = {amount: 25000, years: 5, rate: 3};
    let monthlyPayment = calculateMonthlyPayment(values);
    expect(monthlyPayment).toEqual('449.22')
  });

  it("should return a result with 2 decimal places", function() {
    let values = {amount: 120000, years: 30, rate: 4.7};
    expect(calculateMonthlyPayment(values)).toEqual('622.37');
  });

  it("should handle ridiculous interest rates", function() {
    let values = {amount: 5000000, years: 99, rate: 0.00001};
    expect(calculateMonthlyPayment(values)).toEqual('4208.78');
  })
})





/// etc
