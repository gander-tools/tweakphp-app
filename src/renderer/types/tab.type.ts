export interface Tab {
  id: number
  name: string
  type: string
  code: string
  path: string | undefined
  execution: string
  remote_phar_client: string | undefined
  remote_path: string | undefined
  result: string | undefined
  pane: {
    code: number
    result: number
  }
  info: {
    name: string
    php_version: string
    version: string
  }
  docker: {
    enable: boolean
    php: string
    container_name: string
    container_id: string
    php_version: string
  }
  ssh?: {
    id: number
  }
}
