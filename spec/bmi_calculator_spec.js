describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person_metric = new Person({weight: 90, height: 186});
    person_imperial = new Person({weight: 40.8, height: 73.2});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person_metric.bmiValue).toEqual(26.01);
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator.imperial_bmi(person);
    expect(person_imperial.bmiValue).toEqual(26.01);
  });
});
