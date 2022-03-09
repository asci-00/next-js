import { faker } from '@faker-js/faker';
import { delayResponse, delayRequest } from '../dummyHelpers';

const { random, floor } = Math;

const posts = new Array(3).fill(0).map(() => {
  const post = {
    id: faker.datatype.number(),
    name: faker.name.findName(),
    date: faker.date.future(),
    company: faker.company.bs(),
    title: faker.lorem.words(2),
    content: faker.lorem.paragraphs(),
  };

  const comments = new Array(floor(random(5) * 10)).fill(0).map(() => ({
    postId: post.id,
    userId: faker.datatype.number(),
    id: faker.datatype.number(),
    name: faker.name.findName(),
    date: faker.date.future(),
    content: faker.lorem.sentence(12),
  }));

  return {
    ...post,
    comments,
  };
});

const authInfo = {
  introduction: null,
  loading: false,
  requestError: null,
  isLogin: false,
  token: '',
  name: 'geon uok',
  id: '',
};

export const setPostApi = () => delayResponse(posts);
export const addPostApi = (data) => delayRequest(data);
export const removePostApi = (data) => delayRequest(data);

export const addCommentApi = (data) => delayRequest(data);
export const removeCommentApi = (data) => delayRequest(data);

export const loginApi = (data) =>
  delayResponse({
    ...authInfo,
    id: data.id,
  });
export const logoutApi = () => delayResponse();
