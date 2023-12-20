import { HttpException, HttpStatus } from "@nestjs/common";
import { CreateUserDto } from "../dto/CreateUser.dto";

export default function validateUserData(userData: CreateUserDto): string[] {
    const errors: string[] = [];

    // Validate username
    if (!userData.username || userData.username.trim().length === 0) {
        // errors.push('Username is required.');
        throw new HttpException('',HttpStatus.BAD_REQUEST)
    }

    // Validate email
    if (!userData.email || !/\S+@\S+\.\S+/.test(userData.email)) {
        errors.push('Email is invalid.');
    }

    // Validate age
    if (userData.age === undefined || userData.age < 18) {
        errors.push('Age must be 18 or older.');
    }

    return errors;
}
