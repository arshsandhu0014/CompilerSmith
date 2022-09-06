# CompilerSmith

[![Layer 1blck](https://i.im.ge/2022/09/04/OcNwGC.Layer-1blck.png)](https://im.ge/i/OcNwGC)

##### The best editor and compiler which provides a simple user friendly interface to code,compile and run

CompilerSmith allows users to write code in many supported languages. It is a user friendly online compiler that allows you to write code and run it online.
The site is live 🥳 now at : [CompilerSmith](https://compilersmithapp.fly.dev)

# Background

so we attended the hackathon at LPU. we coded this together inside 24 hours, unfortunately, some bugs at the last minute constrained us and we couldn't deploy it. Now it's working properly.

## Structure

We created a monorepo using yarn workspaces to contain backend and frontend in a single repository.

| Codebase                  |   Description    |
| :------------------------ | :--------------: |
| [server](packages/server) |   Fastify API    |
| [app](packages/app)       | Next.js frontend |

## Features

- A user-friendly, no-setup online integrated development environment (IDE).
- Support languages like C, C++, python.
- Preserves the correct the meaning of the code
- Supports input when running the compiled code

## Tech

In compilerSmith we uses a number of open source technology:

- [Next.js](https://nextjs.org/) - Open-source web development framework for the frontend.It is built on top of React and supports many features such as Static site generation and server side rendering etc.
- [Tailwind](https://tailwindcss.com/) - A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- [TypeScript](https://www.typescriptlang.org/docs/) - TypeScript is a strongly typed programming language that builds on JavaScript.
- [Docker](https://docs.docker.com/) - Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
- [Fastify](https://www.fastify.io/) - Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin. It is used to construct the backend api.

## Docker

CompilerSmith is very easy to install and deploy in a Docker container.
By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd packages/server
docker build -t <youruser>/compilersmith:1.0 .
```

This will create the compilersmith image and pull in the necessary dependencies.Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8080 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8080:8080 --name=compilersmith <youruser>/compilerSmith:1.0
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8080
```

## Team members

- [Shakil Ahmed (Team Lead)](https://github.com/ensorceler)
- [Arshdeep Singh Sandhu](https://github.com/arshsandhu0014)
- [Ravi Rawat](https://github.com/ravirawat0-cyber)
- [Ayush kumar](https://github.com/ayushdotdev)

## License

MIT
**Free Software, Hell Yeah!**

### Future

- Add support for more languages
- Create a sign up/sign in feature
- Add more useful data into code output like (compilation time,memory consumed)
