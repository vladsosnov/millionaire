import axios from 'axios';

class Service {
  async getQuestions() {
    try {
      const questions = await axios.get('./__mocks__/questions.json');

      return questions.data;
    } catch (err) {
      return err;
    }
  }
}

const GameService = new Service();

export { GameService };
