import axios from 'axios';

const LOCATION = 'https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description&language=en'
const SUBSCRIPTION_KEY = ""

export default {
    sendImageToAnalyze(imageUrl) {
        return axios({
            method: 'post',
            url: LOCATION,
            data: {
                'url': imageUrl
            },
            headers: {
                'Content-Type': 'application/json',
                "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY
            },
        })
            .then((result) => result.data.description)
            .catch((err) => err)
    }
}

