import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://ansharimirza:fFPTq6mA1Wb3nkbn@cluster0.p0j98uf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
