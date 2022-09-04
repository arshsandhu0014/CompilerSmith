# CompilerSmith

#### The best compiler and editor to provide an easy to use and simple IDE.

[![Layer 1blck](https://i.im.ge/2022/09/04/OcNwGC.Layer-1blck.png)](https://im.ge/i/OcNwGC)

CompilerSmith allows users to write code in many supported languages. It is a user friendly online compiler that allows you to Write code and run it online.

## Structure

[![Screenshot 2022-09-04 102328](https://i.im.ge/2022/09/04/OcNoBc.Screenshot-2022-09-04-102328.jpg)](https://im.ge/i/OcNoBc)

## Features

- A user-friendly, no-setup online integrated development environment (IDE).
- Support languages like C, C++, python.
- Preserve the correct the meaning of the code

## Tech

In compilerSmith we uses a number of open source technology:

- [Next.js](https://nextjs.org/) - Open-source web development framework.
- [Tailwind](https://tailwindcss.com/) - A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - TypeScript is a strongly typed programming language that builds on JavaScript.
- [Docker](https://docs.docker.com/) - Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
- [Fastify](https://www.fastify.io/) - Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin.

## Docker

CompilerSmith is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd packages/server
docker build -t <youruser>/compilersmith:1.0 .
```

This will create the compilersmith image and pull in the necessary dependencies.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 5000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 5000:8080 --name=compilersmith <youruser>/compilerSmith:1.0
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:5000
```

## Server API method

- endpoints / /code = post
  /code body
  - Lang
  - code_input
  - code_body

## Team members

- [Shakil Ahmed (Team Lead)](https://github.com/ensorceler)
- [Arshdeep Singh Sandhu](https://github.com/arshsandhu0014)
- [Ravi Rawat](https://github.com/ravirawat0-cyber)
- [Ayush kumar](https://github.com/ayushdotdev)

## License

MIT

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[dill]: https://github.com/joemccann/dillinger
[git-repo-url]: https://github.com/joemccann/dillinger.git
[john gruber]: http://daringfireball.net
[df1]: http://daringfireball.net/projects/markdown/
[markdown-it]: https://github.com/markdown-it/markdown-it
[ace editor]: http://ace.ajax.org
[node.js]: http://nodejs.org
[twitter bootstrap]: http://twitter.github.com/bootstrap/
[jquery]: http://jquery.com
[@tjholowaychuk]: http://twitter.com/tjholowaychuk
[express]: http://expressjs.com
[angularjs]: http://angularjs.org
[gulp]: http://gulpjs.com
[pldb]: https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md
[plgh]: https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md
[plgd]: https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md
[plod]: https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md
[plme]: https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md
[plga]: https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md
