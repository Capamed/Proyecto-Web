import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as FileSession from 'session-file-store';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';


const FileStore = FileSession(session);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  app.use(
    session({
      secret: 'No sera de tomar un traguito',
      resave: false,
      saveUninitialized: true,
      cookie: {secure: false},
      //name: 'server-session-id',
      store: new FileStore()
    })
)

  app.use(cookieParser(
      'me gustan los tacos', // secreto
      {  // opciones

      }
  ));
 
  app.set('view engine','ejs')
    app.use(
        express.static('publico')
    );



  await app.listen(8000);

}
bootstrap();
