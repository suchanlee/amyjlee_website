import time
import uuid

CACHE_TTL = 60 * 60 # 1 hr
MAX_CACHE_ENTRY_COUNT = 100

class SessionCache:

    def __init__(self):
        self.cache = {}

    def add(self):
        if len(self.cache.keys()) >= MAX_CACHE_ENTRY_COUNT:
            self.evict_oldest()

        session_id = uuid.uuid1()
        self.cache[session_id] = SessionCacheEntry(session_id)
        return session_id

    def has(self, session_id):
        session = self.cache[session_id]

        if session is None:
            return False

        current_time = time.time()
        is_session_valid = current_time - session.time < CACHE_TTL

        if is_session_valid:
            return True
        else:
            self.cache[session_id] = None
            return False

    def evict_oldest(self):
        keys = self.cache.keys()
        oldest_session = None
        for key in keys:
            session = self.cache[key]
            if oldest_session is None or session.time < oldest_session.time:
                oldest_session = session

        if oldest_session is not None:
            self.cache[oldest_session.session_id] = None


class SessionCacheEntry:

    def __init__(self, session_id):
        self.session_id = session_id
        self.time = time.time()
