function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.bmiValue = 0;
  this.bmiMessage = '';
}

// Person.prototype.calculate_bmi = function() {
//   this.bmiValue = 26.01;
//   this.bmiMessage = "Overweight";
// };

Person.prototype.calculate_bmi = function(arg) {
  calculator = new BMICalculator();
  if (arg === 'metric') {
    calculator.metric_bmi(this);
  } else {
    calculator.imperial_bmi(this);
  }
};
