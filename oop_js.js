function Mail() {
  this.from = "pengirim@dicoding.com";
}
Mail.prototype.sendMessage = function n(msg, to) {
  console.log(`you send: ${msg} to ${to} from ${this.from}\n\n`);
};

let mail1 = new Mail();
mail1.sendMessage("hallo", "penerima@dicoding.com");

// Cara 2
class Mail2 {
  constructor() {
    this.from = "pengirim@dicoding.com";
  }

  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  }
}

mail1 = new Mail2();
mail1.sendMessage("hallo", "penerima@dicoding.com");

