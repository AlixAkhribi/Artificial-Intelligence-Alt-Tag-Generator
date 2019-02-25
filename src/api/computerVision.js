import axios from 'axios';

const LOCATION = 'https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description,color&language=en'
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
            .then((result) => {
                return {
                    imageTags: result.data.description.tags,
                    imageDescription: result.data.description.captions[0].text,
                    isBwImg: result.data.color.isBwImg
                }
            })
            .catch((err) => err)
    },
}

