console.log("consumer");
import Kafka from "node-rdkafka";
import eventType from "../eventType.js";

const consumer = Kafka.KafkaConsumer({
    'group.id': 'kafka_1',
    'metadata.broker.list': 'localhost:9092'
}, { // options 
});

consumer.connect();

consumer.on("ready", () => {
    console.log("Consumer ready");
    //consumer subscribe to the topic (array of topics if exist)
    consumer.subscribe(["test_kafka_topic_1"]);
    consumer.consume();
}).on("data", (data) => {
    //this takes the actual message from event stream 
    //console.log(`Message: ${data.value}`);

    //deserializing the data from event streaming and show the actual value
    console.log(`Received Message: ${eventType.fromBuffer(data.value)}`)
})

// const consumer = Kafka.KafkaConsumer({
//     'group.id': 'kafka',
//     'metadata.broker.list': 'localhost:9092'
// }, {});

// consumer.connect();

// consumer.on("ready", ()=>{
//     console.log("Consumer ready")
//     consumer.subscribe(['test_kafka_topic_1']);
//     consumer.consume();
// }).on('data', (data) => {
//     console.log(`Message: ${data.value}`)
// })