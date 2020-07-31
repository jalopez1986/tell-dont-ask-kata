# tell don't ask kata
A legacy refactor kata, focused on the violation of the [tell don't ask](https://pragprog.com/articles/tell-dont-ask) principle and the [anemic domain model](https://martinfowler.com/bliki/AnemicDomainModel.html).

## Instructions
Here you find a simple order flow application. It's able to create orders, do some calculation (totals and taxes), and manage them (approval/reject and shipment).

The old development team did not find the time to build a proper domain model but instead preferred to use a procedural style, building this anemic domain model.
Fortunately, they did at least take the time to write unit tests for the code.

Your new CTO, after many bugs caused by this application, asked you to refactor this code to make it more maintainable and reliable.

##Get the Code
On GitHub (This kata can be done using Java) If your favorite language is missing, feel free to create a pull request. Be sure the maintainer will be happy ;-)

The initial project in typescript from https://github.com/mapu77/tell-dont-ask-kata
