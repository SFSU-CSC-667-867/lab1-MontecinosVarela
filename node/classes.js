// declaring classes in js

class Something {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(this.name)
  }
}

const s = new Something('tim');
s.hello();

// for practice

// Create a subclass
class SomethingElse extends Something {
  constructor(name) {
    super(name);
    this.message = "how you doing?";
  }

  greetAndAsk() {
    console.log(this.name + ' ' + this.message);
  }

  static staticMethod() {
    return 'Im Static';
  }
}

// add a property after the object has been instantiated
// add a static function

const somethingElse = new SomethingElse('tim')
somethingElse.greetAndAsk();
console.log(SomethingElse.staticMethod());

