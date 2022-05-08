console.log("producer");
import Kafka from "node-rdkafka"

// const stream = Kafka.Producer.createWriteStream({
//     'metadata.broker.list': 'localhost:9092'
// }, {}, {topic: 'test_kafka_topic_1'});

// function queueMessage(){
//     const success = stream.write(Buffer.from('hi'));
//     if(success) {
//         console.log("Message sent")
//     }else{
//         console.log("something is wrong")
//     }
// }

// setInterval(()=>{
//     queueMessage();
// }, 3000);



