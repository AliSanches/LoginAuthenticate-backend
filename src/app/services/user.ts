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
    try {
      let query = await prisma.user.create({
        data: {
          ...data,
        },
      });

      return query;
    } catch {
      return false;
    }
  }

  async login(email: string, password: string) {
    const data = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (data?.password === password) {
      const token = await jwt.sign({ data }, "configuracaoAplicacao");
      return { data, token };
    }
  }

  async welcome(idUser: number) {
    const data = await prisma.user.findUnique({
      where: {
        id: idUser,
      },
      select: {
        name: true,
        email: true,
        id: false,
        password: false,
      },
    });

    return data;
  }
}

module.exports = UserService;
