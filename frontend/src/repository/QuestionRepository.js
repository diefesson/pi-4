import AxiosRepository from "./AxiosRepository"

export default class QuestionRepository extends AxiosRepository {

    constructor(baseUrl, endpointUrl = "/question") {
        super(baseUrl + endpointUrl);
    }

}