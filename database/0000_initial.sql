CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(254) NOT NULL,
  message VARCHAR(2000) NOT NULL,
  ip_hash CHAR(64) NOT NULL,
  user_agent VARCHAR(512),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS contact_messages_email_created_at_idx ON contact_messages (email, created_at DESC);
