import { Module } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';

@Module({
  providers: [WebhooksService],
})
export class WebhooksModule {
  sendWebhook() {
    console.log('Sending Webhook...');
  }
}
