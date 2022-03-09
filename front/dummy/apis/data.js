import { faker } from '@faker-js/faker';
import delayResponse from './delayResponse';

const posters = new Array(20).fill(0).map(() => ({
  id: faker.random.number(),
  name: faker.name.findName(),
  date: faker.date.future(),
  company: faker.company.bs(),
  title: faker.lorem.words(2),
  content: faker.lorem.paragraphs(),
}));

export const requestPost = () => delayResponse(posters);
