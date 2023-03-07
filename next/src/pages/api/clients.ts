import { NextApiRequest, NextApiResponse } from 'next';
import { faker } from '@faker-js/faker';

const createRandomClient = () => {
  const sex = faker.name.sexType();
  // Generate naem that matches user sex
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName(sex);
  // Generate an email that matches user name
  const email = faker.internet.email(firstName, lastName);

  return {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    supportTier: faker.helpers.arrayElement([
      'standard',
      'gold',
      'platinum',
    ]),
    hourlyRate: faker.helpers.arrayElement([60, 75, 100, 125]),
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const clients = [
        ...Array.from(Array(20)).map(() => createRandomClient()),
      ];
      res.status(200).json({ clients });
      break;
    case 'POST':
      break;
    default:
      res.status(400).json({ error: 'Bad request type' });
  }
}
