class TopicService {
    TOPIC_API_URL = "http://localhost:8080/api/topics/";
    LESSON_API_URL = "http://localhost:8080/api/lessons/";

    findTopicById = topicId =>
        fetch(this.TOPIC_API_URL + topicId)
            .then(response => response.json()
            );

    findAllTopics = lesson =>
        fetch(this.LESSON_API_URL + lesson.id + "/topics").then(response => response.json());

    addTopic = (lesson, topic) => {
        fetch(this.LESSON_API_URL + lesson.id + "/topics", {
            method: 'post',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    };

    deleteTopic = (deleteTopic) => {
        console.log(deleteTopic.id);
        fetch(this.TOPIC_API_URL + deleteTopic.id, {
            method: 'delete'
        }).then(response => response.json());
    }

    updateTopic = (topic) => {
        fetch(this.TOPIC_API_URL + topic.id, {
            method: 'put',
            body: JSON.stringify(topic),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    };
}
export default TopicService;