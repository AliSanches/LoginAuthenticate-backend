import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
  name: string;
  email: string;
  password: string;
}

class UserService {
  async register(data: User) {
    let query = await prisma.user.create({
      data: {
        ...data,
      },
    });

    return query;
  }
}

module.exports = UserService;
