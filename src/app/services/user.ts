import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

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
      const token = await jwt.sign({ email }, "configuracaoAplicacao");
      return {
        token,
        mail,
      };
    }
  }
}

module.exports = UserService;
