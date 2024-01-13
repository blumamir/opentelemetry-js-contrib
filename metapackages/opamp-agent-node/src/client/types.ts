
export interface OpAMPClientConfig {

    // Server URL. MUST be set.
    // The url contains the scheme, host and port of the Server.
    // For example:
    // https://my.opamp.server:4320
    baseUrl: string;

    // the http path to use for the OpAMP server. Defaults to /v1/opamp
    opAmpPath?: string;

    // Optional additional HTTP headers to send with all HTTP requests.
    headers?: Partial<Record<string, unknown>>;

	// EnableCompression can be set to true to enable the compression. Note that for WebSocket transport
	// the compression is only effectively enabled if the Server also supports compression.
	// The data will be compressed in both directions.
	enableCompression?: boolean;
}

export interface OpAMPHttpClientConfig extends OpAMPClientConfig {

    // If the Agent has nothing to deliver to the Server the Client MUST periodically 
    // poll the Server by sending an AgentToServer message where only instance_uid field is set. 
    // This gives the Server an opportunity to send back in the response any messages 
    // that the Server wants to deliver to the Agent (such as for example a new remote configuration).
    //
    // The default polling interval when the Agent does not have anything to deliver is 30 seconds.
    pollingIntervalMs?: number;
}