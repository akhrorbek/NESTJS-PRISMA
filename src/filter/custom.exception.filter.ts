import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Inject } from "@nestjs/common";

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const http = host.switchToHttp()
        const response = http.getResponse()

        if( exception instanceof HttpException) {
            return response.json(exception)
        }

        response.json({
            status: 500,
            message: "Internal Error"
        })
    }

}