import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // ===== COMMON LAYOUT =====
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  footer: {
    backgroundColor: '#6200ee',
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  },

  // ===== LOGIN =====
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // ===== POST LIST =====
  postItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  postBody: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },

  // ===== POST DETAIL =====
  detailContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 15,
  },
  detailBody: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 20,
  },
  detailInfoCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
  },
  detailInfoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  navigationButton: {
    backgroundColor: '#03DAC6',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },

  // ===== COUNTER =====
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  counterText: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 40,
  },
  counterButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  counterButton: {
    backgroundColor: '#6200ee',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },
  counterButtonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
