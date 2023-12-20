import { ParseBoolPipe,ParseIntPipe,ClassSerializerInterceptor, Body, Controller, Get, Param, Post, Req, Res,Query, UsePipes,ValidationPipe, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import validateUserData from 'src/users/utils/CreateUserValidation';

@Controller('users')
export class UsersController {
    // const userService = UsersService
    constructor (private readonly userService:UsersService ){

    }
    @Get()
    getUsers(){
        return this.userService.fetchUsers()
        
    }

    @Get('post')
    getUserPosts(){
        return[
            {
                username:'abdullah chaniago',
                email:'ac@gmail.com',
                post:[
                    {
                        id:1,
                        title: 'post 1'
                    },
                    {
                        id:2,
                        title:'post 2'
                    }
                ]
            }
        ]
    }

    @Get('post/comments')
    getUsersPostComments(){
        return [
            {
                id:1,
                title:'post 1',
                comments:[]
            }
        ]
    }

    @Post('create')
    @UseInterceptors(ClassSerializerInterceptor)
    @UsePipes(ValidationPipe)
    createUsers(@Body() userData:CreateUserDto){
        const validationErrors = validateUserData(userData)
        if(validationErrors.length > 0){
            return {errors:validationErrors}
        }
        console.log(userData);
        // const {username,email, age} = userData
        // const userResponse = new CreateUserDto(userData)
        const userResponse = this.userService.createUser(userData)
        const userSerialized = new CreateUserDto(userResponse)

        return userSerialized
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id:number){
        const test=this.userService.fetchUserById(id)
        if(!test){
            throw new HttpException('user not found',HttpStatus.BAD_REQUEST)
        }
        return test
        

    }
}
