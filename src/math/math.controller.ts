import { Body, Controller, Post } from "@nestjs/common";
import { MathService } from "./math.service";
import { MessagePattern } from '@nestjs/microservices'

@Controller()
export class MathController {
  constructor(private readonly mathService: MathService) {}
 
  // 没有@Body()等decorators,有其他的decorators，类似于@Payload()
  @MessagePattern('math:wordcount')
  wordCount(text: string): { [key: string]: number } {
    return this.mathService.calculateWordCount(text);
  }
}