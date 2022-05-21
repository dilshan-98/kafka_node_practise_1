console.log("producer");
import Kafka from "node-rdkafka"
import eventType from "../eventType.js";

const stream = Kafka.Producer.createWriteStream({
    //Takes an object to define the broker
    'metadata.broker.list': 'localhost:9092'
    /*after this, there is a second parameter to define some options (not defined here) and third parameter to 
    define the topics*/
}, {
    //options
}, { topic: 'test_kafka_topic_1' });

function queueMessage() {
    /*
    //allocated a buffer for the string "hi"
    const success = stream.write(Buffer.from("Hi"));
    */

    //defining the event (refer avsc documentation)
    const event = { category: 'DOG', sound: 'Bark' };

    //using the buffer method from avsc instead of default buffer
    const success = stream.write(eventType.toBuffer(event));

    if (success) {
        console.log("Message sent")
    } else {
        console.log("something is wrong")
    }
};

//setting interval of 3sec to display the message in the loop
setInterval(() => {
    queueMessage();
}, 3000);



