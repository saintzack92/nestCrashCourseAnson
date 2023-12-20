import { Exclude } from "class-transformer"
import { IsNotEmpty,IsEmail,MinLength } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    username:string

    @IsEmail()
    @IsNotEmpty()
    email:string

    @Exclude()
    age:number

    constructor(partial:Partial<CreateUserDto>){
        Object.assign(this,partial)
    }
}
