import {Module} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorsInterceptor } from './interceptors/errors.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlConfig } from './config/graphql.config';
import {LogisticModule} from './modules/logistic.module';
import {UserModule} from './modules/user.module';

@Module({
    imports: [
        GraphQLModule.forRootAsync({useClass: GraphqlConfig}),
        TypeOrmModule.forRoot(),
        LogisticModule,
        UserModule.forRoot({
            authTokenWhiteList: ['login', 'getToken']
        })
    ],
    exports: []
})
export class AppModule {}
