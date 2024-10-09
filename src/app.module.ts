import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TempModule } from './temp/temp.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [UserModule, TempModule, DbModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
