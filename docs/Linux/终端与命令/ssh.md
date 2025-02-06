---
title: SSH 教程
date: 2025-02-06 01:46:11
slug: /ssh
---

# sshd

```sh
ding@fedora:~$ sudo vim /etc/ssh/sshd_config
ding@fedora:~$ sudo systemctl start sshd
ding@fedora:~$ sudo systemctl enable sshd
Created symlink '/etc/systemd/system/multi-user.target.wants/sshd.service' → '/usr/lib/systemd/system/sshd.service'.
ding@fedora:~$ 

```

在配置Dedora（假设这里指的是基于Debian的操作系统）以允许外部通过SSH连接时，需要确保几个关键步骤正确无误。以下是一个基本的配置指南，包括安装SSH服务器、配置防火墙规则以及设置SSH密钥认证等安全措施。

### 安装SSH服务器

首先，确保你的Dedora系统已经安装了SSH服务器。你可以通过以下命令来安装：

```bash
sudo apt update
sudo apt install openssh-server
```

### 配置SSH服务器

安装完成后，你需要配置SSH服务器以允许外部连接。编辑`/etc/ssh/sshd_config`文件，确保以下配置项正确：

- `PermitRootLogin yes`：允许root用户通过SSH登录（出于安全考虑，建议使用非root用户进行日常操作，并禁用root登录）。
- `PasswordAuthentication yes`：启用密码认证（为了安全，建议使用密钥认证）。
- `ListenAddress 0.0.0.0`：监听所有网络接口，允许外部连接。

```bash
sudo nano /etc/ssh/sshd_config
```

### 启动SSH服务

保存配置文件后，启动SSH服务：

```bash
sudo systemctl start sshd
sudo systemctl enable sshd
```

### 配置防火墙

确保你的防火墙允许SSH连接。如果你使用的是`ufw`，可以运行以下命令：

```bash
sudo ufw allow ssh
```

### 获取IP地址

在Dedora系统上，你可以通过以下命令获取内网IP地址：

```bash
ip addr show
```

或者使用`ifconfig`命令（在某些系统中可能已被`ip`命令取代）：

```bash
ifconfig
```

### 外部连接

现在，你应该能够从外部设备通过SSH连接到你的Dedora系统。使用以下命令进行连接：

```bash
ssh username@your_ip_address
```

其中`username`是你的Dedora系统上的用户名，`your_ip_address`是你的Dedora系统的内网IP地址。

请注意，为了安全起见，建议在连接时使用SSH密钥认证而非密码认证，并确保你的SSH服务器配置了强密码策略和防火墙规则。此外，如果你的Dedora系统位于公共网络或互联网上，请确保采取适当的安全措施，以防止未经授权的访问。