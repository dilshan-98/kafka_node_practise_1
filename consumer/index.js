console.log("consumer");
import Kafka from "node-rdkafka";

const consumer = Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

consumer.on("ready", ()=>{
    console.log("Consumer ready")
    consumer.subscribe(['test_kafka_topic_1']);
    consumer.consume();
}).on('data', (data) => {
    console.log(`Message: ${data.value}`)
})