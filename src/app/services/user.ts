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

  async login(email: string, password: string) {
    const mail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!mail) {
      return false;
    }

    if (mail?.password === password) {
      return mail;
    }
  }
}

module.exports = UserService;
