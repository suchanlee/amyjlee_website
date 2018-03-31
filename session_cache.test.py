import unittest
from session_cache import SessionCache

class TestSessionCache(unittest.TestCase):

    def test_single_add(self):
        cache = SessionCache()
        session_id = cache.add()
        self.assertEqual(cache.has(session_id), True)

    def test_multiple_add(self):
        cache = SessionCache()
        session_ids = []

        for i in range(0, 100):
            session_ids.append(cache.add())

        for session_id in session_ids:
            self.assertEqual(cache.has(session_id), True)

    def test_evict(self):
        cache = SessionCache()
        session_ids = []

        for i in range(0, 101):
            session_ids.append(cache.add())

        for index, session_id in enumerate(session_ids):
            self.assertEqual(cache.has(session_id), index > 0)


if __name__ == "__main__":
    unittest.main()
