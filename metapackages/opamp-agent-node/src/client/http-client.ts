import { opamp } from '../generated/root';
import { OpAMPClient } from './client';
import { OpAMPHttpClientConfig } from './types';
import axios, { AxiosInstance } from 'axios';

const defaultOpAmpPath = '/v1/opamp';

export class HttpClient implements OpAMPClient {
  private axiosInstance: AxiosInstance;
  private opampPath: string;

  constructor(config: OpAMPHttpClientConfig) {
    this.axiosInstance = axios.create({
      baseURL: config.baseUrl,
      headers: {
          ...config.headers,
          'Content-Type': 'application/x-protobuf',
      },
      timeout: 5000,
    });
    this.opampPath = config.opAmpPath || defaultOpAmpPath;
  }

  public start(): void {
    this.sendFirstMessage()
  }

  private async sendFirstMessage(): Promise<void> {
    const firstMessage: opamp.proto.IAgentToServer = {
        instanceUid: '1234',
    }
    const data = Buffer.from(opamp.proto.AgentToServer.encode(firstMessage).finish());
    const res = await this.axiosInstance.post(this.opampPath, data)
    console.log(res.data)
  }
}
